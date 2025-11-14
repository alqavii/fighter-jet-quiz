export interface FighterJet {
  id: string;
  name: string;
  country: string;
  generation: string;
  branch: string; // 'Air Force' or 'Navy'
  imagePath: string;
}

export const fighterJets: FighterJet[] = [
  // American 4th Gen
  { id: 'f-15', name: 'F-15 Eagle', country: 'USA', generation: '4th Gen', branch: 'Air Force', imagePath: '/jets/f-15.png' },
  { id: 'f-16', name: 'F-16 Fighting Falcon', country: 'USA', generation: '4th Gen', branch: 'Air Force', imagePath: '/jets/f-16.png' },
  { id: 'f-14', name: 'F-14 Tomcat', country: 'USA', generation: '4th Gen', branch: 'Navy', imagePath: '/jets/f-14.png' },
  { id: 'f-18', name: 'F/A-18 Hornet', country: 'USA', generation: '4th Gen', branch: 'Navy', imagePath: '/jets/f-18.png' },
  { id: 'a-10', name: 'A-10 Thunderbolt II', country: 'USA', generation: '4th Gen', branch: 'Air Force', imagePath: '/jets/a-10.png' },
  
  // American 4.5th Gen
  { id: 'f-18e', name: 'F/A-18E Super Hornet', country: 'USA', generation: '4.5th Gen', branch: 'Navy', imagePath: '/jets/f-18e.png' },
  { id: 'f-15e', name: 'F-15E Strike Eagle', country: 'USA', generation: '4.5th Gen', branch: 'Air Force', imagePath: '/jets/f-15e.png' },
  { id: 'f-15ex', name: 'F-15EX Eagle II', country: 'USA', generation: '4.5th Gen', branch: 'Air Force', imagePath: '/jets/f-15ex.png' },
  
  // American 5th Gen
  { id: 'f-22', name: 'F-22 Raptor', country: 'USA', generation: '5th Gen', branch: 'Air Force', imagePath: '/jets/f-22.png' },
  { id: 'f-35a', name: 'F-35A Lightning II', country: 'USA', generation: '5th Gen', branch: 'Air Force', imagePath: '/jets/f-35a.png' },
  { id: 'f-35b', name: 'F-35B Lightning II', country: 'USA', generation: '5th Gen', branch: 'Marines', imagePath: '/jets/f-35b.png' },
  { id: 'f-35c', name: 'F-35C Lightning II', country: 'USA', generation: '5th Gen', branch: 'Navy', imagePath: '/jets/f-35c.png' },
  
  // British
  { id: 'typhoon', name: 'Eurofighter Typhoon', country: 'UK/Germany/Italy/Spain', generation: '4.5th Gen', branch: 'Air Force', imagePath: '/jets/typhoon.png' },
  { id: 'tornado', name: 'Panavia Tornado', country: 'UK/Germany/Italy', generation: '4th Gen', branch: 'Air Force', imagePath: '/jets/tornado.png' },
  { id: 'harrier', name: 'Harrier Jump Jet', country: 'UK', generation: '4th Gen', branch: 'Navy', imagePath: '/jets/harrier.png' },
  
  // French
  { id: 'rafale', name: 'Dassault Rafale', country: 'France', generation: '4.5th Gen', branch: 'Air Force', imagePath: '/jets/rafale.png' },
  { id: 'mirage-2000', name: 'Mirage 2000', country: 'France', generation: '4th Gen', branch: 'Air Force', imagePath: '/jets/mirage-2000.png' },
  { id: 'mirage-f1', name: 'Mirage F1', country: 'France', generation: '4th Gen', branch: 'Air Force', imagePath: '/jets/mirage-f1.png' },
  
  // Swedish
  { id: 'gripen', name: 'Saab Gripen', country: 'Sweden', generation: '4.5th Gen', branch: 'Air Force', imagePath: '/jets/gripen.png' },
  { id: 'viggen', name: 'Saab Viggen', country: 'Sweden', generation: '4th Gen', branch: 'Air Force', imagePath: '/jets/viggen.png' },
  
  // European (Other)
  { id: 'jas-39', name: 'JAS 39 Gripen', country: 'Sweden', generation: '4.5th Gen', branch: 'Air Force', imagePath: '/jets/jas-39.png' },
  
  // Russian
  { id: 'su-27', name: 'Su-27 Flanker', country: 'Russia', generation: '4th Gen', branch: 'Air Force', imagePath: '/jets/su-27.png' },
  { id: 'su-30', name: 'Su-30', country: 'Russia', generation: '4.5th Gen', branch: 'Air Force', imagePath: '/jets/su-30.png' },
  { id: 'su-33', name: 'Su-33 Flanker-D', country: 'Russia', generation: '4th Gen', branch: 'Navy', imagePath: '/jets/su-33.png' },
  { id: 'su-35', name: 'Su-35 Flanker-E', country: 'Russia', generation: '4.5th Gen', branch: 'Air Force', imagePath: '/jets/su-35.png' },
  { id: 'su-57', name: 'Su-57 Felon', country: 'Russia', generation: '5th Gen', branch: 'Air Force', imagePath: '/jets/su-57.png' },
  { id: 'mig-29', name: 'MiG-29 Fulcrum', country: 'Russia', generation: '4th Gen', branch: 'Air Force', imagePath: '/jets/mig-29.png' },
  { id: 'mig-31', name: 'MiG-31 Foxhound', country: 'Russia', generation: '4th Gen', branch: 'Air Force', imagePath: '/jets/mig-31.png' },
  { id: 'mig-35', name: 'MiG-35 Fulcrum-F', country: 'Russia', generation: '4.5th Gen', branch: 'Air Force', imagePath: '/jets/mig-35.png' },
  
  // Chinese
  { id: 'j-10', name: 'J-10 Vigorous Dragon', country: 'China', generation: '4th Gen', branch: 'Air Force', imagePath: '/jets/j-10.png' },
  { id: 'j-11', name: 'J-11', country: 'China', generation: '4th Gen', branch: 'Air Force', imagePath: '/jets/j-11.png' },
  { id: 'j-15', name: 'J-15 Flying Shark', country: 'China', generation: '4th Gen', branch: 'Navy', imagePath: '/jets/j-15.png' },
  { id: 'j-16', name: 'J-16', country: 'China', generation: '4.5th Gen', branch: 'Air Force', imagePath: '/jets/j-16.png' },
  { id: 'j-20', name: 'J-20 Mighty Dragon', country: 'China', generation: '5th Gen', branch: 'Air Force', imagePath: '/jets/j-20.png' },
  { id: 'j-31', name: 'J-31/F-31', country: 'China', generation: '5th Gen', branch: 'Navy', imagePath: '/jets/j-31.png' },
];

