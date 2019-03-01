import axios from 'axios';

export default function(token,itemId){
    var updateCartPromise = axios({
		method: "POST",
		url: `${window.apiHost}/cart/updateCart`,
		data: {
            token,
            itemId: itemId,
		}
	});

	return{
		type: "UPDATE_CART",
		payload: updateCartPromise,
	}
}