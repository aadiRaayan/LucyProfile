const getJoke = async function () {
try {
    const response = await axios.get(`${SERVER_URL}/user`, msg);
    console.log(response.data);
    setMsg(response.data)
    // console.log(data);
} catch (error) {
    console.log(error);
}
  }
const updMsg = (e) => setMsg(e.target.value);
<input type='text' name='msg' placeholder='Enter Message' value={msg} onChange={updMsg} />