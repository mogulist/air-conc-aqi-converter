export const aqiSpecs = {
    misebig: { // 미세빅 표준
        level: 6,
        color: [ 'green', 'yellow', 'orange', 'red', 'purple', 'maroon', 'grey'],
        name: ['Good', 'Moderate', 'Unhealthy for Sensitive Groups', 'Unhealthy', 'Very Unhealthy', 'Hazardous', 'Out of Bounds' ],
        indexBp: [ 50, 100, 150, 200, 300, 400, 500 ],
        startBp: [ 0,  101, 151, 201, 301, 401,],
        pm25Data: {
            concEndPoints: [ 12, 25.4, 55.4, 150.4, 250.4, 350.4 ],
            lastConcStart: 351,
            lastConcEnd: 500,
            lastAqiStart: 401,
            lastAqiEnd: 500,
            get lastConcIntvl () {
                return this.lastConcEnd - this.lastConcStart;
            },
            get lastAqiIntvl () {
                return this.lastAqiEnd - this.lastAqiStart;
            },
            get slope() {
                return this.lastAqiIntvl/this.lastConcIntvl;
            }, 
            get intercept() {
                return this.lastAqiStart - this.lastConcStart*this.slope;
            },
        },
        pm10Data: {
            concEndPoints: [ 30, 50, 150, 354, 424, 504 ],
            lastConcStart: 505,
            lastConcEnd: 604,
            lastAqiStart: 401,
            lastAqiEnd: 500,
            get lastConcIntvl () {
                return this.lastConcEnd - this.lastConcStart;
            },
            get lastAqiIntvl () {
                return this.lastAqiEnd - this.lastAqiStart;
            },
            get slope() {
                return this.lastAqiIntvl/this.lastConcIntvl;
            }, 
            get intercept() {
                return this.lastAqiStart - this.lastConcStart*this.slope;
            },
        },
        no2Data: {
            concEndPoints: [ 0.03, 0.06, 0.2, 0.649, 1.249, 1.649 ],
            lastConcStart: 1.650,
            lastConcEnd: 2.049,
            lastAqiStart: 400.5,
            lastAqiEnd: 500.4,
            get lastConcIntvl () {
                return this.lastConcEnd - this.lastConcStart;
            },
            get lastAqiIntvl () {
                return this.lastAqiEnd - this.lastAqiStart;
            },
            get slope() {
                return this.lastAqiIntvl/this.lastConcIntvl;
            }, 
            get intercept() {
                return this.lastAqiStart - this.lastConcStart*this.slope;
            },
        },
        o3Data: {
            concEndPoints: [ 0.03, 0.09, 0.15, 0.204, 0.404, 0.504 ],
            lastConcStart: 0.505,
            lastConcEnd: 0.604,
            lastAqiStart: 400.5,
            lastAqiEnd: 500.4,
            get lastConcIntvl () {
                return this.lastConcEnd - this.lastConcStart;
            },
            get lastAqiIntvl () {
                return this.lastAqiEnd - this.lastAqiStart;
            },
            get slope() {
                return this.lastAqiIntvl/this.lastConcIntvl;
            }, 
            get intercept() {
                return this.lastAqiStart - this.lastConcStart*this.slope;
            },
        },
        so2Data: {
            concEndPoints: [ 0.02, 0.050, 0.15, 0.304, 0.604, 0.804 ],
            lastConcStart: 0.805,
            lastConcEnd: 1.004,
            lastAqiStart: 400.5,
            lastAqiEnd: 500.4,
            get lastConcIntvl () {
                return this.lastConcEnd - this.lastConcStart;
            },
            get lastAqiIntvl () {
                return this.lastAqiEnd - this.lastAqiStart;
            },
            get slope() {
                return this.lastAqiIntvl/this.lastConcIntvl;
            }, 
            get intercept() {
                return this.lastAqiStart - this.lastConcStart*this.slope;
            },
        },
        coData: {
            concEndPoints: [ 2, 9.0, 12.4, 15.0, 30.4, 40.4 ],
            lastConcStart: 40.5,
            lastConcEnd: 50.4,
            lastAqiStart: 400.5,
            lastAqiEnd: 500.4,
            get lastConcIntvl () {
                return this.lastConcEnd - this.lastConcStart;
            },
            get lastAqiIntvl () {
                return this.lastAqiEnd - this.lastAqiStart;
            },
            get slope() {
                return this.lastAqiIntvl/this.lastConcIntvl;
            }, 
            get intercept() {
                return this.lastAqiStart - this.lastConcStart*this.slope;
            },
        },
    },
        //pm25: [ 12.0, 35.4, 55.4, 150.4, 250.4, 350.4 ], // US AQI
        //pm10: [ 54, 155, 254, 354, 424, 504 ], // US AQI
    us: {
        level: 6,
        color: [ 'green', 'yellow', 'orange', 'red', 'purple', 'maroon', 'grey'],
        name: ['Good', 'Moderate', 'Unhealthy for Sensitive Groups', 'Unhealthy', 'Very Unhealthy', 'Hazardous', 'Out of Bounds' ],
        pm25: [ 12.0, 35.4, 55.4, 150.4, 250.4, 500.4 ],
        pm10: [ 54, 154, 254, 354, 424, 604, 2105 ],
        //o3: [ 54, 70, 85, 105, 200, -1, -2 ], // ppm 2018.6.3까지 사용했던 잘못된 오존 breakpoint
        o3: [ 62.5, 101.5, 152.5, 205, 405, 605, 1000 ], // ppm. http://aqicn.org/faq/2016-08-10/ozone-aqi-scale-update/
        o31h: [ -1, -1, 164, 204, 404, 604 ],
        no2: [ 53, 100, 360, 649, 1249, 2049 ],
        co: [ 4.4, 9.4, 12.4, 15.4, 30.4, 50.4 ],
        so2: [ 35, 75, 185, 304, 604, 1004 ],
        indexBp: [ 50, 100, 150, 200, 300, 400, 500 ],
        startBp: [ 0,  101, 151, 201, 301, 401,],
        pm25Data: {
            concEndPoints: [ 12, 35.4, 55.4, 150.4, 250.4, 350.4 ],
            lastConcStart: 351,
            lastConcEnd: 500,
            lastAqiStart: 401,
            lastAqiEnd: 500,
            get lastConcIntvl () {
                return this.lastConcEnd - this.lastConcStart;
            },
            get lastAqiIntvl () {
                return this.lastAqiEnd - this.lastAqiStart;
            },
            get slope() {
                return this.lastAqiIntvl/this.lastConcIntvl;
            }, 
            get intercept() {
                return this.lastAqiStart - this.lastConcStart*this.slope;
            },
        },
        //pm10: [ 54, 155, 254, 354, 424, 504 ], // US AQI
        //  54, 154, 254, 354, 424, 604, 2105 ]
        pm10Data: {
            concEndPoints: [ 54, 154, 254, 354, 424, 504 ],
            lastConcStart: 505,
            lastConcEnd: 604,
            lastAqiStart: 401,
            lastAqiEnd: 500,
            get lastConcIntvl () {
                return this.lastConcEnd - this.lastConcStart;
            },
            get lastAqiIntvl () {
                return this.lastAqiEnd - this.lastAqiStart;
            },
            get slope() {
                return this.lastAqiIntvl/this.lastConcIntvl;
            }, 
            get intercept() {
                return this.lastAqiStart - this.lastConcStart*this.slope;
            },
        },
        //no2: [ 53, 100, 360, 649, 1249, 2049 ],
        no2Data: {
            concEndPoints: [ 0.053, 0.1, 0.36, 0.649, 1.249, 1.649 ],
            lastConcStart: 1.650,
            lastConcEnd: 2.049,
            lastAqiStart: 400.5,
            lastAqiEnd: 500.4,
            get lastConcIntvl () {
                return this.lastConcEnd - this.lastConcStart;
            },
            get lastAqiIntvl () {
                return this.lastAqiEnd - this.lastAqiStart;
            },
            get slope() {
                return this.lastAqiIntvl/this.lastConcIntvl;
            }, 
            get intercept() {
                return this.lastAqiStart - this.lastConcStart*this.slope;
            },
        },
        // o3: [ 62.5, 101.5, 152.5, 205, 405, 605, 1000 ]
        o3Data: {
            concEndPoints: [ 0.062, 0.124, 0.164, 0.204, 0.404, 0.504 ], // 0,1 구간은 공식적으로 정해지지 않은 것. 0 구간은 1구간의 반으로 함.
            concEndPoints8h: [ 0.054, 0.070, 0.085, 0.105, 0.200, -1 ],  // 참고용
            concEndPoints1h: [ -1, -1, 0.164, 0.204, 0.404, 0.504 ],     // 참고용
            lastConcStart: 0.505,
            lastConcEnd: 0.604,
            lastAqiStart: 400.5,
            lastAqiEnd: 500.4,
            get lastConcIntvl () {
                return this.lastConcEnd - this.lastConcStart;
            },
            get lastAqiIntvl () {
                return this.lastAqiEnd - this.lastAqiStart;
            },
            get slope() {
                return this.lastAqiIntvl/this.lastConcIntvl;
            }, 
            get intercept() {
                return this.lastAqiStart - this.lastConcStart*this.slope;
            },
        },
        // so2: [ 35, 75, 185, 304, 604, 1004 ],
        so2Data: {
            concEndPoints: [ 0.035, 0.075, 0.185, 0.304, 0.604, 0.804 ],
            lastConcStart: 0.805,
            lastConcEnd: 1.004,
            lastAqiStart: 400.5,
            lastAqiEnd: 500.4,
            get lastConcIntvl () {
                return this.lastConcEnd - this.lastConcStart;
            },
            get lastAqiIntvl () {
                return this.lastAqiEnd - this.lastAqiStart;
            },
            get slope() {
                return this.lastAqiIntvl/this.lastConcIntvl;
            }, 
            get intercept() {
                return this.lastAqiStart - this.lastConcStart*this.slope;
            },
        },
        // co: [ 4.4, 9.4, 12.4, 15.4, 30.4, 50.4 ],
        coData: {
            concEndPoints: [ 4.4, 9.4, 12.4, 15.4, 30.4, 40.4 ],
            lastConcStart: 40.5,
            lastConcEnd: 50.4,
            lastAqiStart: 400.5,
            lastAqiEnd: 500.4,
            get lastConcIntvl () {
                return this.lastConcEnd - this.lastConcStart;
            },
            get lastAqiIntvl () {
                return this.lastAqiEnd - this.lastAqiStart;
            },
            get slope() {
                return this.lastAqiIntvl/this.lastConcIntvl;
            }, 
            get intercept() {
                return this.lastAqiStart - this.lastConcStart*this.slope;
            },
        },
    },
    kr: {
        level: 4,
        color: [ 'green', 'yellow', 'orange', 'red', 'purple', 'maroon', 'grey'],
        name: ['Good', 'Moderate', 'Unhealthy for Sensitive Groups', 'Unhealthy', 'Very Unhealthy', 'Hazardous', 'Out of Bounds' ],
        pm25: [ 12.0, 35.4, 55.4, 150.4, 250.4, 500.4 ],
        pm10: [ 54, 154, 254, 354, 424, 604, 2105 ],
        //o3: [ 54, 70, 85, 105, 200, -1, -2 ], // ppm 2018.6.3까지 사용했던 잘못된 오존 breakpoint
        o3: [ 62.5, 101.5, 152.5, 205, 405, 605, 1000 ], // ppm. http://aqicn.org/faq/2016-08-10/ozone-aqi-scale-update/
        o31h: [ -1, -1, 164, 204, 404, 604 ],
        no2: [ 53, 100, 360, 649, 1249, 2049 ],
        co: [ 4.4, 9.4, 12.4, 15.4, 30.4, 50.4 ],
        so2: [ 35, 75, 185, 304, 604, 1004 ],
        indexBp: [ 50, 100, 250, 500 ],
        startBp: [ 0,  101, 251, ],

        pm25Data: {
            concEndPoints: [ 15, 35, 75, 500 ],
            lastConcStart: 76,
            lastConcEnd: 500,
            lastAqiStart: 251,
            lastAqiEnd: 500,
            get lastConcIntvl () {
                return this.lastConcEnd - this.lastConcStart;
            },
            get lastAqiIntvl () {
                return this.lastAqiEnd - this.lastAqiStart;
            },
            get slope() {
                return this.lastAqiIntvl/this.lastConcIntvl;
            }, 
            get intercept() {
                return this.lastAqiStart - this.lastConcStart*this.slope;
            },
        },
        pm10Data: {
            concEndPoints: [ 30, 80, 150, 600 ],
            lastConcStart: 151,
            lastConcEnd: 600,
            lastAqiStart: 251,
            lastAqiEnd: 500,
            get lastConcIntvl () {
                return this.lastConcEnd - this.lastConcStart;
            },
            get lastAqiIntvl () {
                return this.lastAqiEnd - this.lastAqiStart;
            },
            get slope() {
                return this.lastAqiIntvl/this.lastConcIntvl;
            }, 
            get intercept() {
                return this.lastAqiStart - this.lastConcStart*this.slope;
            },
        },
        no2Data: {
            concEndPoints: [ 0.03, 0.06, 0.2, 2.0 ],
            lastConcStart: 0.201,
            lastConcEnd: 2.0,
            lastAqiStart: 251,
            lastAqiEnd: 500,
            get lastConcIntvl () {
                return this.lastConcEnd - this.lastConcStart;
            },
            get lastAqiIntvl () {
                return this.lastAqiEnd - this.lastAqiStart;
            },
            get slope() {
                return this.lastAqiIntvl/this.lastConcIntvl;
            }, 
            get intercept() {
                return this.lastAqiStart - this.lastConcStart*this.slope;
            },
        },
        o3Data: {
            concEndPoints: [ 0.03, 0.09, 0.15, 0.6],
            lastConcStart: 0.151,
            lastConcEnd: 0.6,
            lastAqiStart: 251,
            lastAqiEnd: 500,
            get lastConcIntvl () {
                return this.lastConcEnd - this.lastConcStart;
            },
            get lastAqiIntvl () {
                return this.lastAqiEnd - this.lastAqiStart;
            },
            get slope() {
                return this.lastAqiIntvl/this.lastConcIntvl;
            }, 
            get intercept() {
                return this.lastAqiStart - this.lastConcStart*this.slope;
            },
        },
        so2Data: {
            concEndPoints: [ 0.02, 0.050, 0.15, 1.0],
            lastConcStart: 0.151,
            lastConcEnd: 1.0,
            lastAqiStart: 251,
            lastAqiEnd: 500,
            get lastConcIntvl () {
                return this.lastConcEnd - this.lastConcStart;
            },
            get lastAqiIntvl () {
                return this.lastAqiEnd - this.lastAqiStart;
            },
            get slope() {
                return this.lastAqiIntvl/this.lastConcIntvl;
            }, 
            get intercept() {
                return this.lastAqiStart - this.lastConcStart*this.slope;
            },
        },
        coData: {
            concEndPoints: [ 2, 9.0, 15.0, 50 ],
            lastConcStart: 15.1,
            lastConcEnd: 50.0,
            lastAqiStart: 251,
            lastAqiEnd: 500,
            get lastConcIntvl () {
                return this.lastConcEnd - this.lastConcStart;
            },
            get lastAqiIntvl () {
                return this.lastAqiEnd - this.lastAqiStart;
            },
            get slope() {
                return this.lastAqiIntvl/this.lastConcIntvl;
            }, 
            get intercept() {
                return this.lastAqiStart - this.lastConcStart*this.slope;
            },
        },
    },
    aqicn: { // AQICN's data used to convert to US AQI. Ozone is different from original US AQI.

    },
}