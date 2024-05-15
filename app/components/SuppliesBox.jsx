'use client'
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const SuppliesBox = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    brand: '',
    category: '',
    productName: '',
    quantity: '',
    price: '',
    origin: '',
    cost: ''
  });
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [noStockMessage, setNoStockMessage] = useState('');
  const [sales, setSales] = useState([]);

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  useEffect(() => {
    filterProducts('category', formData.category);
  }, [formData.category, formData.brand]);
  
  useEffect(() => {
    filterProducts('brand', formData.brand);
  }, [formData.brand]);

  const filterProducts = (name, value) => {
    let filtered = [];
  
    if (name === 'category') {
      filtered = value ? products.filter(product => product.productCategory === value) : products;
    }
  
    if (name === 'brand') {
      filtered = value ? products.filter(product => product.brandName === value) : products;
    }

    if (formData.category && formData.brand) {
      const matchingProducts = products.filter(product => product.productCategory === formData.category && product.brandName === formData.brand);
      if (matchingProducts.length === 0) {
        setNoStockMessage(`We don't have stocks for ${formData.category} by ${formData.brand}`);
      } else {
        setNoStockMessage('');
      }
    } else {
      setNoStockMessage('');
    }
  
    setFilteredProducts(filtered);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`, formData);
      console.log('Item added successfully');
      setFormData({
        brandName: '',
        productCategory: '',
        productName: '',
        quantity: '',
        price: '',
        origin: '',
        costOfSupplies: ''
      });
      toast.success('Item successfully added!', {
        position: 'top-center',
        autoClose: 800,
      });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      setShowModal(false);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/categories`);
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchBrands = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/brands`);
            setBrands(response.data);
        } catch (error) {
            console.error('Error fetching brands:', error);
        }
    };

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`);
            setProducts(response.data);
            setFilteredProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const fetchSales = async () => {
      try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/sales`);
          setSales(response.data);
      } catch (error) {
          console.error('Error fetching sales:', error);
      }
    };

    fetchCategories();
    fetchBrands();
    fetchProducts();
    fetchSales();
  }, []);

  const getBestSellers = (order = 'desc') => {
    const productSalesMap = {};

    sales.forEach(sale => {
      const productId = sale.product._id;
      if (productSalesMap[productId]) {
        productSalesMap[productId] += sale.quantitySold;
      } else {
        productSalesMap[productId] = sale.quantitySold;
      }
    });

    return products.map(product => ({
      ...product,
      quantitySold: productSalesMap[product._id] || 0
    })).sort((a, b) => order === 'desc' ? b.quantitySold - a.quantitySold : a.quantitySold - b.quantitySold);
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    if (value === 'bestSeller') {
      setFilteredProducts(getBestSellers('desc'));
    } else if (value === 'leastSold') {
      setFilteredProducts(getBestSellers('asc'));
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <div className='flex flex-col bg-white h-[47.5rem] w-[93rem] rounded-tl-[24px] rounded-tr-[24px]'>
      <div className='flex pt-5 px-5 gap-[6rem] font-Lato items-center'>
        {/* Dropdowns */}
        <select name='category' value={formData.category} onChange={handleChange} className="font-bold w-[200px] p-3 rounded-lg border-NeonGreen border appearance-none">
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
        <select name='brand' value={formData.brand} onChange={handleChange} className="font-bold w-[200px] p-3 rounded-lg border-NeonGreen border appearance-none">
          <option value="">Select Brand </option>
          {brands.map((brand) => (
            <option key={brand}>{brand}</option>
          ))}
        </select>
        <select name='sort' value={formData.sort} onChange={handleSortChange} className="font-bold w-[200px] ml-[105px] p-3 rounded-lg border-NeonGreen border appearance-none">
          <option value="">Sort By</option>
          <option value="bestSeller">Best Seller</option>
          <option value="leastSold">Least Sold</option>
          <option value="default">Default</option>
        </select>
        <div className="ml-auto">
          <button
            className='bg-NeonGreen font-bold text-lg text-white rounded-lg p-2 hover:bg-Goldy hover:bold hover:rounded-2xl transition-all ease-in'
            onClick={() => setShowModal(true)}>
            Add New Item +
          </button>
        </div>
      </div>
      {/* Headers */}
      <div className='flex justify-between px-5 mt-5'>
        <p className="w-[100px]">Product ID</p>
        <p className="w-[200px]">Product Name</p>
        <p className="w-[150px]">Brand</p>
        <p className="w-[100px]">Price</p>
        <p className="w-[100px]">Stock</p>
      </div>
      {/* Product list table */}
      <div className='flex flex-col mt-3 overflow-y-scroll scrollbar'>
        {/* Display no stock message if applicable */}
        {noStockMessage ? (
          <div className='text-red-500 text-center'>{noStockMessage}</div>
        ) : (
          /* Product list rows */
          filteredProducts.map((product) => (
            <div key={product._id} className='flex justify-between px-5 border-b py-3'>
              <p className="w-[100px]">{product.idNumber}</p>
              <p className="w-[200px]">{product.productName}</p>
              <p className="w-[150px]">{product.brandName}</p>
              <p className="w-[100px]">${product.price}</p>
              <p className="w-[100px]">{product.quantity}</p>
            </div>
          ))
        )}
      </div>
      {/* Modal for adding new items */}
      {showModal && (
        <div className='fixed z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white p-5 rounded-lg w-[500px] h-[40rem]' ref={modalRef}>
            <h2 className='text-2xl font-bold font-Montserrat mb-3'>Add New Item</h2>
            <form onSubmit={handleSubmit} className='flex flex-col'>
              {/* Input fields for new item */}
              <input className='border border-black mb-5 h-[50px] px-2 rounded-[20px]' type='text' name='brandName' value={formData.brandName} onChange={handleChange} placeholder='Brand' />
              <input className='border border-black mb-5 h-[50px] px-2 rounded-[20px]' type='text' name='productCategory' value={formData.productCategory} onChange={handleChange} placeholder='Category' />
              <input className='border border-black mb-5 h-[50px] px-2 rounded-[20px]' type='text' name='productName' value={formData.productName} onChange={handleChange} placeholder='Product Name' />
              <input className='border border-black mb-5 h-[50px] px-2 rounded-[20px]' type='number' name='quantity' value={formData.quantity} onChange={handleChange} placeholder='Quantity' />
              <input className='border border-black mb-5 h-[50px] px-2 rounded-[20px]' type='number' name='price' value={formData.price} onChange={handleChange} placeholder='Price' />
              <input className='border border-black mb-5 h-[50px] px-2 rounded-[20px]' type='text' name='origin' value={formData.origin} onChange={handleChange} placeholder='Origin' />
              <input className='border border-black mb-5 h-[50px] px-2 rounded-[20px]' type='number' name='costOfSupplies' value={formData.costOfSupplies} onChange={handleChange} placeholder='Cost' />
              <div className='flex justify-center gap-5'>
                <button className='w-[10rem] text-black border border-black text-[20px] rounded-xl drop font-Lato hover:bg-Goldy hover:text-white hover:border-none transition-all duration 300 mb-5' type='submit'>Add</button>
                <button className='w-[10rem] text-black border border-black text-[20px] rounded-xl drop font-Lato hover:bg-red-500 hover:text-white hover:border-none transition-all duration 300 mb-5' onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default SuppliesBox;
