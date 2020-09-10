/*
 * Copyright (c) 2020 Ford Motor Company
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Axios, {AxiosResponse} from 'axios';
import {Product} from './Product';
import moment from 'moment';

class ProductClient {

    private static getBaseProductsUrl(spaceUuid: string): string {
        return '/api/space/' + spaceUuid + '/products/';
    }

    static async createProduct(spaceUuid: string, product: Product): Promise<AxiosResponse> {
        return Axios.post(
            this.getBaseProductsUrl(spaceUuid),
            product
        );
    }

    static async editProduct(spaceUuid: string, product: Product): Promise<AxiosResponse> {
        return Axios.put(
            this.getBaseProductsUrl(spaceUuid) + product.id,
            product
        );
    }

    static async deleteProduct(spaceUuid: string, product: Product): Promise<AxiosResponse> {
        return Axios.delete(
            this.getBaseProductsUrl(spaceUuid) + product.id,
        );
    }

    static async getProductsForDate(spaceUuid: string, date: Date): Promise<AxiosResponse> {
        const formattedDate = moment(date).format('YYYY-MM-DD');
        return Axios.get(
            this.getBaseProductsUrl(spaceUuid) + formattedDate,
            {headers: { 'Content-Type': 'application/json'}}
        );
    }
}

export default ProductClient;
