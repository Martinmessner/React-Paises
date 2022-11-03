export const CallApiFetch = () => {
   
   return fetch(`https://restcountries.com/v3.1/all`)
            .then(response =>  response.json())
            .then(response => {
                const states = response
                console.log(states)
                return states
            })
};