import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Моторы'},
            {id: 2, name: 'Станки'},
            {id: 3, name: 'Смартфоны'},
            {id: 4, name: 'Телевизоры'},
            {id: 5, name: 'Холодильники'},
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Asus'},
            {id: 5, name: 'Xiaomi'},
            {id: 6, name: 'Huawei'},
        ]
        this._devices = [
            {id: 1, name: 'Galaxy Ultra S21', price: 41000, rating: 5, img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id: 2, name: 'Iphone 12 pro', price: 41000, rating: 5, img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id: 3, name: 'Redmi 11 Ultra', price: 41000, rating: 5, img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id: 4, name: 'Ultra Pro21', price: 41000, rating: 5, img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id: 5, name: 'Ultra Pro22', price: 41000, rating: 5, img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id: 6, name: 'Ultra Pro23', price: 41000, rating: 5, img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
        ]
        this._selectedType = {}
        this._selectedBrand = {}

        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }setBrands(brands) {
        this._brands = brands
    }setDevices(devices) {
        return this._devices
    }setSelectedType(type) {
        this._selectedType = type
    }setSelectedBrand(type) {
        this._selectedBrand = type
    }

    get types() {
        return this._types
    }get brands() {
        return this._brands
    }get devices() {
        return this._devices
    }get selectedType() {
        return this._selectedType
    }get selectedBrand() {
        return this._selectedBrand
    }
}