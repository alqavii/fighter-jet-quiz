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
  { id: 'f-15', name: 'F-15 Eagle', country: 'USA', generation: '4th Gen', branch: 'Air Force', imagePath: '/jets/f-15.jpg' },
  { id: 'f-16', name: 'F-16 Fighting Falcon', country: 'USA', generation: '4th Gen', branch: 'Air Force', imagePath: '/jets/f-16.jpg' },
  { id: 'f-14', name: 'F-14 Tomcat', country: 'USA', generation: '4th Gen', branch: 'Navy', imagePath: '/jets/f-14.jpg' },
  { id: 'f-18', name: 'F/A-18 Hornet', country: 'USA', generation: '4th Gen', branch: 'Navy', imagePath: '/jets/f-18.jpg' },
  { id: 'a-10', name: 'A-10 Thunderbolt II', country: 'USA', generation: '4th Gen', branch: 'Air Force', imagePath: '/jets/a-10.jpg' },
  
  // American 4.5th Gen
  { id: 'f-18e', name: 'F/A-18E Super Hornet', country: 'USA', generation: '4.5th Gen', branch: 'Navy', imagePath: '/jets/f-18e.jpg' },
  { id: 'f-15e', name: 'F-15E Strike Eagle', country: 'USA', generation: '4.5th Gen', branch: 'Air Force', imagePath: '/jets/f-15e.jpg' },
  { id: 'f-15ex', name: 'F-15EX Eagle II', country: 'USA', generation: '4.5th Gen', branch: 'Air Force', imagePath: '/jets/f-15ex.jpg' },
  
  // American 5th Gen
  { id: 'f-22', name: 'F-22 Raptor', country: 'USA', generation: '5th Gen', branch: 'Air Force', imagePath: '/jets/f-22.jpg' },
  { id: 'f-35a', name: 'F-35A Lightning II', country: 'USA', generation: '5th Gen', branch: 'Air Force', imagePath: '/jets/f-35a.jpg' },
  { id: 'f-35b', name: 'F-35B Lightning II', country: 'USA', generation: '5th Gen', branch: 'Marines', imagePath: '/jets/f-35b.jpg' },
  { id: 'f-35c', name: 'F-35C Lightning II', country: 'USA', generation: '5th Gen', branch: 'Navy', imagePath: '/jets/f-35c.jpg' },
  
  // British
  { id: 'typhoon', name: 'Eurofighter Typhoon', country: 'UK/Germany/Italy/Spain', generation: '4.5th Gen', branch: 'Air Force', imagePath: '/jets/typhoon.jpg' },
  { id: 'tornado', name: 'Panavia Tornado', country: 'UK/Germany/Italy', generation: '4th Gen', branch: 'Air Force', imagePath: '/jets/tornado.jpg' },
  { id: 'harrier', name: 'Harrier Jump Jet', country: 'UK', generation: '4th Gen', branch: 'Navy', imagePath: '/jets/harrier.jpg' },
  
  // French
  { id: 'rafale', name: 'Dassault Rafale', country: 'France', generation: '4.5th Gen', branch: 'Air Force', imagePath: '/jets/rafale.jpg' },
  { id: 'mirage-2000', name: 'Mirage 2000', country: 'France', generation: '4th Gen', branch: 'Air Force', imagePath: '/jets/mirage-2000.jpg' },
  { id: 'mirage-f1', name: 'Mirage F1', country: 'France', generation: '4th Gen', branch: 'Air Force', imagePath: '/jets/mirage-f1.jpg' },
  
  // Swedish
  { id: 'gripen', name: 'Saab Gripen', country: 'Sweden', generation: '4.5th Gen', branch: 'Air Force', imagePath: '/jets/gripen.jpg' },
  { id: 'viggen', name: 'Saab Viggen', country: 'Sweden', generation: '4th Gen', branch: 'Air Force', imagePath: '/jets/viggen.jpg' },
  
  // European (Other)
  { id: 'jas-39', name: 'JAS 39 Gripen', country: 'Sweden', generation: '4.5th Gen', branch: 'Air Force', imagePath: '/jets/jas-39.jpg' },
  
  // Russian
  { id: 'su-27', name: 'Su-27 Flanker', country: 'Russia', generation: '4th Gen', branch: 'Air Force', imagePath: '/jets/su-27.jpg' },
  { id: 'su-30', name: 'Su-30', country: 'Russia', generation: '4.5th Gen', branch: 'Air Force', imagePath: '/jets/su-30.jpg' },
  { id: 'su-33', name: 'Su-33 Flanker-D', country: 'Russia', generation: '4th Gen', branch: 'Navy', imagePath: '/jets/su-33.jpg' },
  { id: 'su-35', name: 'Su-35 Flanker-E', country: 'Russia', generation: '4.5th Gen', branch: 'Air Force', imagePath: '/jets/su-35.jpg' },
  { id: 'su-57', name: 'Su-57 Felon', country: 'Russia', generation: '5th Gen', branch: 'Air Force', imagePath: '/jets/su-57.jpg' },
  { id: 'mig-29', name: 'MiG-29 Fulcrum', country: 'Russia', generation: '4th Gen', branch: 'Air Force', imagePath: '/jets/mig-29.jpg' },
  { id: 'mig-31', name: 'MiG-31 Foxhound', country: 'Russia', generation: '4th Gen', branch: 'Air Force', imagePath: '/jets/mig-31.jpg' },
  { id: 'mig-35', name: 'MiG-35 Fulcrum-F', country: 'Russia', generation: '4.5th Gen', branch: 'Air Force', imagePath: '/jets/mig-35.jpg' },
  
  // Chinese
  { id: 'j-10', name: 'J-10 Vigorous Dragon', country: 'China', generation: '4th Gen', branch: 'Air Force', imagePath: '/jets/j-10.jpg' },
  { id: 'j-11', name: 'J-11', country: 'China', generation: '4th Gen', branch: 'Air Force', imagePath: '/jets/j-11.jpg' },
  { id: 'j-15', name: 'J-15 Flying Shark', country: 'China', generation: '4th Gen', branch: 'Navy', imagePath: '/jets/j-15.jpg' },
  { id: 'j-16', name: 'J-16', country: 'China', generation: '4.5th Gen', branch: 'Air Force', imagePath: '/jets/j-16.jpg' },
  { id: 'j-20', name: 'J-20 Mighty Dragon', country: 'China', generation: '5th Gen', branch: 'Air Force', imagePath: '/jets/j-20.jpg' },
  { id: 'j-31', name: 'J-31/F-31', country: 'China', generation: '5th Gen', branch: 'Navy', imagePath: '/jets/j-31.jpg' },
];

