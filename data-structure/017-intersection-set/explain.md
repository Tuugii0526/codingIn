# Set классын intersection метод

Та бодлоготой [энд] танилцаж болно.

## _Бодлогын өгүүлбэр_

Set классд intersection хэмээх метод үүсгэ . Энэхүү метод нь нэг параметртэй бөгөөд энэхүү параметрээр Set обьект авна . Энэхүү метод хоёр Set -д байгаа давхацсан элементүүдийг буцаана .

## _Бодолт_

```
intersection(set) {
const intersection = new Set();
intersection.union(this.dictionary);
const arr = [];
const addToInt = (value) => {
if (!intersection.add(value)) {
arr.push(value);
}
};
set.values().forEach(addToInt);
return arr;
}
```

[энд]: https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/perform-an-intersection-on-two-sets-of-data
