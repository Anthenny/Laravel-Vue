import React, { useRef, useState } from 'react';
import axiosClient from '../axios-client';

function CreateListing() {
  const bedsRef = useRef();
  const bathsRef = useRef();
  const areaRef = useRef();
  const cityRef = useRef();
  const streetRef = useRef();
  const streetnrRef = useRef();
  const codeRef = useRef();
  const priceRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(undefined);

  const handleListing = async (e) => {
    e.preventDefault();

    const payload = {
      beds: bedsRef.current.value,
      baths: bathsRef.current.value,
      area: areaRef.current.value,
      city: cityRef.current.value,
      street: streetRef.current.value,
      street_nr: streetnrRef.current.value,
      code: codeRef.current.value,
      price: priceRef.current.value,
    };

    try {
      setIsLoading(true);
      const response = await axiosClient.post('/listing', payload);
      setMessage(response.data.message);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {message && <p>{message}</p>}
      <form onSubmit={handleListing}>
        <input type="number" ref={bedsRef} placeholder="beds" />
        <input type="number" ref={bathsRef} placeholder="baths" />
        <input type="number" ref={areaRef} placeholder="area" />
        <input type="text" ref={cityRef} placeholder="city" />
        <input type="text" ref={streetRef} placeholder="street" />
        <input type="text" ref={streetnrRef} placeholder="street_nr" />
        <input type="text" ref={codeRef} placeholder="code" />
        <input type="number" ref={priceRef} placeholder="price" />
        <button type="submit">submit</button>

      </form>
    </div>
  );
}

export default CreateListing;
