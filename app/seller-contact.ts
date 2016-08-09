export class SellerContact {
    
    constructor(
        
        public firstName: string,
        public lastName: string,
        public phoneNumber: string,
        public email: string,
        public address?: string
    ) { }

}