var app = angular.module('app', []);

app.controller('mycart', function($scope) {
    $scope.disablebtn = true;

    $scope.itemList = [{
            "id": 1,
            "name": 'Lehenga Choli',
            "img": 'https://rukminim1.flixcart.com/image/100/100/lehenga-choli/s/t/y/prachi-lehenga-ethnicup-free-original-imae9cgqbhzxfnuf.jpeg?q=90',
            "price": 575,
            "qnt": 1
        },
        {
            "id": 2,
            "name": 'Saree',
            "img": 'https://rukminim1.flixcart.com/image/100/100/j5zmw7k0/sari/h/u/z/free-vjs108-1-v-j-fashion-original-imaewjjmx7bnkfzf.jpeg?q=90',
            "price": 800,
            "qnt": 1
        },
        {
            "id": 3,
            "name": 'Suit',
            "img": 'https://rukminim1.flixcart.com/image/100/100/fabric/n/8/r/5007-b-7010-tulsi-trendz-original-imaekx6pcv6nfzag.jpeg?q=90',
            "price": 731,
            "qnt": 1
        }
    ];
    //add items
    $scope.addItem = function(allitems) {
        allitems.qnt = allitems.qnt + 1;
        allitems.price = allitems.qnt * allitems.price;
        $scope.disablebtn = false;
    }

    // remove items
    $scope.removeitem = function(allitems) {
        if (allitems.qnt > 1) {
            $scope.disablebtn = false;
            allitems.price = allitems.price / allitems.qnt;
            allitems.qnt = allitems.qnt - 1;
        } else {
            $scope.disablebtn = true;
            allitems.qnt = 1;
        }
    }

    // Total price
    $scope.total = function() {
        var total = 0;
        for (var i = 0; i < $scope.itemList.length; i++) {
            total += $scope.itemList[i].price;
        }
        return total;
    }

    //total quantity
    $scope.totalqnt = function() {
            var totalqnt = 0;
            for (var i = 0; i < $scope.itemList.length; i++) {
                totalqnt += $scope.itemList[i].qnt;
            }
            return totalqnt;
        }
        //remove item
    $scope.remove = function(index) {
        $scope.itemList.splice(index, 1);
    }
});