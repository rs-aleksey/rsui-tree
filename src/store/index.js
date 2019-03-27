export const NODE_TYPE_EMAIL = 'NODE_TYPE_EMAIL';
export const NODE_TYPE_TIMING = 'NODE_TYPE_TIMING';
export const NODE_TYPE_SEGMENT_OPENED = 'NODE_TYPE_SEGMENT_OPENED';
export const NODE_TYPE_SEGMENT_CLOSED = 'NODE_TYPE_SEGMENT_CLOSED';

export const pathStatus = {
  PATH_STATUS_ACTIVE: 'PATH_STATUS_ACTIVE',
  PATH_STATUS_INACTIVE: 'PATH_STATUS_INACTIVE',
};

const store = {
  paths: {
    byId: {
      p_id_1: {id: 'p_id_1', status: pathStatus.PATH_STATUS_ACTIVE, name: 'First Path'},
      p_id_2: {id: 'p_id_2', status: pathStatus.PATH_STATUS_INACTIVE, name: 'Second Path'},
    },
    allIds: ['id_1', 'id_2']
  },
  pathStructures: {
    p_id_1: {
      nodes: {
        n_id_1: {id: 'n_id_1', type: NODE_TYPE_EMAIL, name: 'Email 1', children: ['n_id_2'], root: true},
        n_id_2: {id: 'n_id_2', type: NODE_TYPE_SEGMENT_CLOSED, name: 'Segment 2', children: ['n_id_3', null, 'n_id_11']},
        n_id_3: {id: 'n_id_3', type: NODE_TYPE_SEGMENT_CLOSED, name: 'Segment 3', children: ['n_id_5', 'n_id_6', 'n_id_8']},
        n_id_4: {id: 'n_id_4', type: NODE_TYPE_TIMING, name: 'Timing 4', children: ['n_id_7']},
        n_id_5: {id: 'n_id_5', type: NODE_TYPE_TIMING, name: 'Timing 5', children: ['n_id_9']},
        n_id_6: {id: 'n_id_6', type: NODE_TYPE_EMAIL, name: 'Email 6', children: ['n_id_4']},
        n_id_7: {id: 'n_id_7', type: NODE_TYPE_EMAIL, name: 'Email 7', children: []},
        n_id_8: {id: 'n_id_8', type: NODE_TYPE_EMAIL, name: 'Email 8', children: []},
        n_id_9: {id: 'n_id_9', type: NODE_TYPE_SEGMENT_CLOSED, name: 'Segment 9', children: [null, 'n_id_10', 'n_id_12']},
        n_id_10: {id: 'n_id_10', type: NODE_TYPE_EMAIL, name: 'Email 10', children: []},
        n_id_11: {id: 'n_id_11', type: NODE_TYPE_TIMING, name: 'Timing 11', children: []},
        n_id_12: {id: 'n_id_12', type: NODE_TYPE_EMAIL, name: 'Email 12', children: []},
      },
      childToParent: {
        n_id_12: 'n_id_9',
      }
    },
  },
};

export const getPathById = id => store.paths.byId[id];

export const getNodeById = (nodeId, pathId = 'p_id_1',) =>
  store.pathStructures[pathId] &&
  store.pathStructures[pathId].nodes[nodeId];

export const getFirstNodeForPath = (pathId) =>
  store.pathStructures[pathId] &&
  Object.values(store.pathStructures[pathId].nodes).find(node => node.root);

export default store;
