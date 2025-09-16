export default function Editproduct(){
    return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handler}
        className="bg-white p-8 rounded-lg shadow-lg w-[450px]"
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">
          ➕ Add New Product
        </h1>

        <label className="block mb-2">Product ID</label>
        <input
          type="text"
          placeholder="Enter product ID"
          className="w-full p-2 mb-4 border rounded"
          required
          value={pid}
          onChange={(e) => setPid(e.target.value)}
        />

        <label className="block mb-2">Product Name</label>
        <input
          type="text"
          placeholder="Enter product name"
          className="w-full p-2 mb-4 border rounded"
          required
          value={pname}
          onChange={(e) => setPname(e.target.value)}
        />

        <label className="block mb-2">Alternative Names (comma separated)</label>
        <input
          type="text"
          placeholder="Ex: phone,mobile,smartphone"
          className="w-full p-2 mb-4 border rounded"
          value={altname}
          onChange={(e) => setAltname(e.target.value)}
        />

       <label className="block mb-2">Upload Images</label>
      <input
        type="file"
        multiple={true}
        className="w-full p-2 mb-4 border rounded"
        onChange={(e) => setImgFile((e.target.files))}
/>

        <label className="block mb-2">Price</label>
        <input
          type="text"
          placeholder="Enter price"
          className="w-full p-2 mb-4 border rounded"
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label className="block mb-2">Last Price</label>
        <input
          type="text"
          placeholder="Enter last price"
          className="w-full p-2 mb-4 border rounded"
          required
          value={lasprice}
          onChange={(e) => setLasprice(e.target.value)}
        />

        <label className="block mb-2">Stock</label>
        <input
          type="text"
          placeholder="Enter stock count"
          className="w-full p-2 mb-4 border rounded"
          required
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />

        <label className="block mb-2">Description</label>
        <textarea
          placeholder="Enter description"
          className="w-full p-2 mb-4 border rounded"
          rows="3"
          required
          value={describtion}
          onChange={(e) => setDescribtion(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
