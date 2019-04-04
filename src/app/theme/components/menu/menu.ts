import { Menu } from './menu.model';

export const verticalMenuItems = [ 
    new Menu (1, 'Dashboard', '/blank', null, 'dashboard', null, false, 0),
    new Menu (2, 'CRM', null, null, 'computer', null, true, 0),   
    new Menu (3, 'Relaties', '/', null, 'keyboard', null, false, 2),  
    new Menu (4, 'Contactpersonen', '/', null, 'keyboard', null, false, 2), 
    new Menu (5, 'Leveradressen', '/#', null, 'keyboard', null, false, 2), 
    new Menu (6, 'Documenten', '/#', null, 'keyboard', null, false, 2), 
    new Menu (10, 'Algemeen', null, null, 'computer', null, true, 2), 
    new Menu (11, 'Adressen', '/#', null, 'keyboard', null, false, 10), 
    new Menu (12, 'Provincies', '/#', null, 'keyboard', null, false, 10), 
    new Menu (13, 'Landen', '/crm/landen', null, 'keyboard', null, false, 10), 
    new Menu (14, 'Talen', '/#', null, 'keyboard', null, false, 10), 
    new Menu (15, 'Relatietypes', '/#', null, 'keyboard', null, false, 10), 
    new Menu (16, 'Relatiegroepen', '/#', null, 'keyboard', null, false, 10), 
    new Menu (17, 'Financiele status', '/#', null, 'keyboard', null, false, 10), 
    new Menu (18, 'Rechtsvormen', '/#', null, 'keyboard', null, false, 10), 
    new Menu (19, 'Titels', '/#', null, 'keyboard', null, false, 10), 
    new Menu (20, 'Funties', '/#', null, 'keyboard', null, false, 10), 
   
]

export const horizontalMenuItems = []