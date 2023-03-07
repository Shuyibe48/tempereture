const key = `a5ef9b06d5c16d654c6ede1280b8e285`
const url = `https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=${key}&units=metric`

const fetchUrl = async url => {
    const res = await fetch(url)
    const data = await res.json()
    displayData(data)
}
fetchUrl(url)

const setInnerText = (id, data) => {
    const element = document.getElementById(id)
    element.innerText = data
}

const displayData = data => {
    setInnerText('city-name', data.name)
    setInnerText('temp', data.main.temp)
    setInnerText('weather', data.weather[0].main)
    setInnerText('icon', data.weather[0].icon)
}

document.getElementById('search-btn').addEventListener('click', function(){

    const city = document.getElementById('search-field').value
    document.getElementById('search-field').value = ''

    const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    fetch(url2)
    .then(res => res.json())
    .then(data => displayData(data))
})