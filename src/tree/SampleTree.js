import React, { Component } from 'react';
import {
  NODE_TYPE_EMAIL,
  NODE_TYPE_SEGMENT_OPENED,
  NODE_TYPE_SEGMENT_CLOSED,
  NODE_TYPE_TIMING,
} from './constants';
import TreeNodes from './TreeNodes';
import TreeLayoutContainer from './layout/TreeLayoutContainer';

const treeData = [
  {
    type: NODE_TYPE_EMAIL,
    name: 'EMAIL',
    children: [
      {
        type: NODE_TYPE_TIMING,
        name: 'TIMING',
        children: [
          {
            type: NODE_TYPE_EMAIL,
            name: 'EMAIL',
            children: [
              {
                type: NODE_TYPE_SEGMENT_OPENED,
                name: 'SEGMENT',
                children: [
                  {
                    type: NODE_TYPE_SEGMENT_OPENED,
                    name: 'SEGMENT',
                    children: [
                      {
                        type: NODE_TYPE_SEGMENT_OPENED,
                        name: 'SEGMENT',
                        children: [
                          {
                            type: NODE_TYPE_SEGMENT_OPENED,
                            name: 'SEGMENT',
                            children: [
                              {
                                type: NODE_TYPE_SEGMENT_CLOSED,
                                name: 'SEGMENT',
                                children: [
                                  undefined,
                                  {
                                    type: NODE_TYPE_EMAIL,
                                    name: 'EMAIL',
                                    children: [
                                      {
                                        type: NODE_TYPE_EMAIL,
                                        name: 'EMAIL',
                                        children: [
                                          {
                                            type: NODE_TYPE_EMAIL,
                                            name: 'EMAIL',
                                            children: [
                                              {
                                                type: NODE_TYPE_EMAIL,
                                                name: 'EMAIL',
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    type: NODE_TYPE_SEGMENT_OPENED,
                                    name: 'SEGMENT',
                                    children: [
                                      undefined,
                                      undefined,
                                    ],
                                  },
                                ],
                              },
                              {
                                type: NODE_TYPE_SEGMENT_CLOSED,
                                name: 'SEGMENT',
                                children: [
                                  undefined,
                                  undefined,
                                  {
                                    type: NODE_TYPE_EMAIL,
                                    name: 'EMAIL',
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: NODE_TYPE_SEGMENT_CLOSED,
                            name: 'SEGMENT',
                            children: [
                              {
                                type: NODE_TYPE_SEGMENT_CLOSED,
                                name: 'SEGMENT',
                                children: [
                                  undefined,
                                  undefined,
                                ],
                              },
                              {
                                type: NODE_TYPE_SEGMENT_CLOSED,
                                name: 'SEGMENT',
                                children: [
                                  undefined,
                                  undefined,
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: NODE_TYPE_SEGMENT_CLOSED,
                        name: 'SEGMENT',
                        children: [
                          {
                            type: NODE_TYPE_SEGMENT_CLOSED,
                            name: 'SEGMENT',
                            children: [
                              {
                                type: NODE_TYPE_EMAIL,
                                name: 'EMAIL',
                                children: [
                                  {
                                    type: NODE_TYPE_SEGMENT_CLOSED,
                                    name: 'SEGMENT',
                                    children: [
                                      undefined,
                                      undefined,
                                    ],
                                  },
                                ],
                              },
                              {
                                type: NODE_TYPE_SEGMENT_CLOSED,
                                name: 'SEGMENT',
                                children: [
                                  undefined,
                                  undefined,
                                ],
                              },
                            ],
                          },
                          {
                            type: NODE_TYPE_SEGMENT_CLOSED,
                            name: 'SEGMENT',
                            children: [
                              {
                                type: NODE_TYPE_SEGMENT_CLOSED,
                                name: 'SEGMENT',
                                children: [
                                  undefined,
                                  undefined,
                                ],
                              },
                              {
                                type: NODE_TYPE_SEGMENT_CLOSED,
                                name: 'SEGMENT',
                                children: [
                                  undefined,
                                  undefined,
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: NODE_TYPE_SEGMENT_CLOSED,
                    name: 'SEGMENT',
                    children: [
                      {
                        type: NODE_TYPE_SEGMENT_CLOSED,
                        name: 'SEGMENT',
                        children: [
                          {
                            type: NODE_TYPE_SEGMENT_CLOSED,
                            name: 'SEGMENT',
                            children: [
                              {
                                type: NODE_TYPE_SEGMENT_CLOSED,
                                name: 'SEGMENT',
                                children: [
                                  undefined,
                                  undefined,
                                  {
                                    type: NODE_TYPE_EMAIL,
                                    name: 'EMAIL',
                                  },
                                ],
                              },
                              {
                                type: NODE_TYPE_SEGMENT_CLOSED,
                                name: 'SEGMENT',
                                children: [
                                  undefined,
                                  undefined,
                                  {
                                    type: NODE_TYPE_EMAIL,
                                    name: 'EMAIL',
                                  },
                                ],
                              },
                              {
                                type: NODE_TYPE_EMAIL,
                                name: 'EMAIL',
                              },
                            ],
                          },
                          {
                            type: NODE_TYPE_SEGMENT_CLOSED,
                            name: 'SEGMENT',
                            children: [
                              {
                                type: NODE_TYPE_SEGMENT_CLOSED,
                                name: 'SEGMENT',
                                children: [
                                  undefined,
                                  undefined,
                                  {
                                    type: NODE_TYPE_EMAIL,
                                    name: 'EMAIL',
                                  },
                                ],
                              },
                              {
                                type: NODE_TYPE_SEGMENT_CLOSED,
                                name: 'SEGMENT',
                                children: [
                                  undefined,
                                  undefined,
                                  {
                                    type: NODE_TYPE_EMAIL,
                                    name: 'EMAIL',
                                  },
                                ],
                              },
                              {
                                type: NODE_TYPE_EMAIL,
                                name: 'EMAIL',
                              },
                            ],
                          },
                          {
                            type: NODE_TYPE_EMAIL,
                            name: 'EMAIL',
                          },
                        ],
                      },
                      {
                        type: NODE_TYPE_SEGMENT_CLOSED,
                        name: 'SEGMENT',
                        children: [
                          {
                            type: NODE_TYPE_SEGMENT_CLOSED,
                            name: 'SEGMENT',
                            children: [
                              {
                                type: NODE_TYPE_SEGMENT_CLOSED,
                                name: 'SEGMENT',
                                children: [
                                  undefined,
                                  undefined,
                                  {
                                    type: NODE_TYPE_EMAIL,
                                    name: 'EMAIL',
                                  },
                                ],
                              },
                              {
                                type: NODE_TYPE_SEGMENT_CLOSED,
                                name: 'SEGMENT',
                                children: [
                                  undefined,
                                  undefined,
                                ],
                              },
                              {
                                type: NODE_TYPE_EMAIL,
                                name: 'EMAIL',
                              },
                            ],
                          },
                          {
                            type: NODE_TYPE_SEGMENT_CLOSED,
                            name: 'SEGMENT',
                            children: [
                              {
                                type: NODE_TYPE_SEGMENT_CLOSED,
                                name: 'SEGMENT',
                                children: [
                                  undefined,
                                  undefined,
                                  {
                                    type: NODE_TYPE_EMAIL,
                                    name: 'EMAIL',
                                  },
                                ],
                              },
                              {
                                type: NODE_TYPE_SEGMENT_CLOSED,
                                name: 'SEGMENT',
                                children: [
                                  undefined,
                                  undefined,
                                  {
                                    type: NODE_TYPE_EMAIL,
                                    name: 'EMAIL',
                                  },
                                ],
                              },
                              {
                                type: NODE_TYPE_EMAIL,
                                name: 'EMAIL',
                              },
                            ],
                          },
                          {
                            type: NODE_TYPE_EMAIL,
                            name: 'EMAIL',
                          },
                        ],
                      },
                      {
                        type: NODE_TYPE_EMAIL,
                        name: 'EMAIL',
                        children: [
                          {
                            type: NODE_TYPE_SEGMENT_CLOSED,
                            name: 'SEGMENT',
                            children: [
                              undefined,
                              undefined,
                              {
                                type: NODE_TYPE_EMAIL,
                                name: 'EMAIL',
                                children: [
                                  {
                                    type: NODE_TYPE_SEGMENT_OPENED,
                                    name: 'SEGMENT',
                                    children: [
                                      {
                                        type: NODE_TYPE_TIMING,
                                        name: 'TIMING',
                                      },
                                      undefined,
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  }
];

export default class SampleTree extends Component {
  render() {
    return (
      <TreeLayoutContainer>
        <TreeNodes childrenNodes={treeData} />
      </TreeLayoutContainer>
    );
  }
}
