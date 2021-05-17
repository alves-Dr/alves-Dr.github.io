/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   iron-overlay-behavior.html
 */

/// <reference path="../polymer/types/polymer.d.ts" />
/// <reference path="../iron-fit-behavior/iron-fit-behavior.d.ts" />
/// <reference path="../iron-resizable-behavior/iron-resizable-behavior.d.ts" />
/// <reference path="iron-overlay-manager.d.ts" />
/// <reference path="iron-scroll-manager.d.ts" />
/// <reference path="iron-focusables-helper.d.ts" />

declare namespace Polymer {

  interface IronOverlayBehaviorImpl {

    /**
     * True if the overlay is currently displayed.
     */
    opened: boolean|null|undefined;

    /**
     * True if the overlay was canceled when it was last closed.
     */
    readonly canceled: boolean|null|undefined;

    /**
     * Set to true to display a backdrop behind the overlay. It traps the focus
     * within the light DOM of the overlay.
     */
    withBackdrop: boolean|null|undefined;

    /**
     * Set to true to disable auto-focusing the overlay or child nodes with
     * the `autofocus` attribute` when the overlay is opened.
     */
    noAutoFocus: boolean|null|undefined;

    /**
     * Set to true to disable canceling the overlay with the ESC key.
     */
    noCancelOnEscKey: boolean|null|undefined;

    /**
     * Set to true to disable canceling the overlay by clicking outside it.
     */
    noCancelOnOutsideClick: boolean|null|undefined;

    /**
     * Contains the reason(s) this overlay was last closed (see
     * `iron-overlay-closed`). `IronOverlayBehavior` provides the `canceled`
     * reason; implementers of the behavior can provide other reasons in
     * addition to `canceled`.
     */
    closingReason: object|null|undefined;

    /**
     * Set to true to enable restoring of focus when overlay is closed.
     */
    restoreFocusOnClose: boolean|null|undefined;

    /**
     * Set to true to allow clicks to go through overlays.
     * When the user clicks outside this overlay, the click may
     * close the overlay below.
     */
    allowClickThrough: boolean|null|undefined;

    /**
     * Set to true to keep overlay always on top.
     */
    alwaysOnTop: boolean|null|undefined;

    /**
     * Determines which action to perform when scroll outside an opened overlay
     * happens. Possible values: lock - blocks scrolling from happening, refit -
     * computes the new position on the overlay cancel - causes the overlay to
     * close
     */
    scrollAction: string|null|undefined;

    /**
     * The node being focused.
     */
    _focusedChild: Node|null;

    /**
     * The backdrop element.
     */
    readonly backdropElement: Element;

    /**
     * Returns the node to give focus to.
     */
    readonly _focusNode: Node;

    /**
     * Array of nodes that can receive focus (overlay included), ordered by
     * `tabindex`. This is used to retrieve which is the first and last focusable
     * nodes in order to wrap the focus for overlays `with-backdrop`.
     *
     * If you know what is your content (specifically the first and last focusable
     * children), you can override this method to return only `[firstFocusable,
     * lastFocusable];`
     */
    readonly _focusableNodes: Node[];
    ready(): void;
    attached(): void;
    detached(): void;

    /**
     * Toggle the opened state of the overlay.
     */
    toggle(): void;

    /**
     * Open the overlay.
     */
    open(): void;

    /**
     * Close the overlay.
     */
    close(): void;

    /**
     * Cancels the overlay.
     *
     * @param event The original event
     */
    cancel(event?: Event|null): void;

    /**
     * Invalidates the cached tabbable nodes. To be called when any of the
     * focusable content changes (e.g. a button is disabled).
     */
    invalidateTabbables(): void;
    _ensureSetup(): void;

    /**
     * Called when `opened` changes.
     */
    _openedChanged(opened?: boolean): void;
    _canceledChanged(): void;
    _withBackdropChanged(): void;

    /**
     * tasks which must occur before opening; e.g. making the element visible.
     */
    _prepareRenderOpened(): void;

    /**
     * Tasks which cause the overlay to actually open; typically play an
     * animation.
     */
    _renderOpened(): void;

    /**
     * Tasks which cause the overlay to actually close; typically play an
     * animation.
     */
    _renderClosed(): void;

    /**
     * Tasks to be performed at the end of open action. Will fire
     * `iron-overlay-opened`.
     */
    _finishRenderOpened(): void;

    /**
     * Tasks to be performed at the end of close action. Will fire
     * `iron-overlay-closed`.
     */
    _finishRenderClosed(): void;
    _preparePositioning(): void;
    _finishPositioning(): void;

    /**
     * Applies focus according to the opened state.
     */
    _applyFocus(): void;

    /**
     * Cancels (closes) the overlay. Call when click happens outside the overlay.
     */
    _onCaptureClick(event: Event): void;

    /**
     * Keeps track of the focused child. If withBackdrop, traps focus within
     * overlay.
     */
    _onCaptureFocus(event: Event): void;

    /**
     * Handles the ESC key event and cancels (closes) the overlay.
     */
    _onCaptureEsc(event: Event): void;

    /**
     * Handles TAB key events to track focus changes.
     * Will wrap focus for overlays withBackdrop.
     */
    _onCaptureTab(event: Event): void;

    /**
     * Refits if the overlay is opened and not animating.
     */
    _onIronResize(): void;

    /**
     * Will call notifyResize if overlay is opened.
     * Can be overridden in order to avoid multiple observers on the same node.
     */
    _onNodesChange(): void;
  }

  const IronOverlayBehaviorImpl: object;

  /**
   *   Use `Polymer.IronOverlayBehavior` to implement an element that can be hidden or
   *   shown, and displays on top of other content. It includes an optional backdrop,
   *   and can be used to implement a variety of UI controls including dialogs and drop
   *   downs. Multiple overlays may be displayed at once.
   *
   *   See the [demo source
   *   code](https://github.com/PolymerElements/iron-overlay-behavior/blob/master/demo/simple-overlay.html)
   *   for an example.
   *
   *   ### Closing and canceling
   *
   *   An overlay may be hidden by closing or canceling. The difference between close
   *   and cancel is user intent. Closing generally implies that the user acknowledged
   *   the content on the overlay. By default, it will cancel whenever the user taps
   *   outside it or presses the escape key. This behavior is configurable with the
   *   `no-cancel-on-esc-key` and the `no-cancel-on-outside-click` properties.
   *   `close()` should be called explicitly by the implementer when the user interacts
   *   with a control in the overlay element. When the dialog is canceled, the overlay
   *   fires an 'iron-overlay-canceled' event. Call `preventDefault` on this event to
   *   prevent the overlay from closing.
   *
   *   ### Positioning
   *
   *   By default the element is sized and positioned to fit and centered inside the
   *   window. You can position and size it manually using CSS. See
   *   `Polymer.IronFitBehavior`.
   *
   *   ### Backdrop
   *
   *   Set the `with-backdrop` attribute to display a backdrop behind the overlay. The
   *   backdrop is appended to `<body>` and is of type `<iron-overlay-backdrop>`. See
   *   its doc page for styling options.
   *
   *   In addition, `with-backdrop` will wrap the focus within the content in the light
   *   DOM. Override the [`_focusableNodes`
   *   getter](#Polymer.IronOverlayBehavior:property-_focusableNodes) to achieve a
   *   different behavior.
   *
   *   ### Limitations
   *
   *   The element is styled to appear on top of other content by setting its `z-index`
   *   property. You must ensure no element has a stacking context with a higher
   *   `z-index` than its parent stacking context. You should place this element as a
   *   child of `<body>` whenever possible.
   *
   *   
   */
  interface IronOverlayBehavior extends Polymer.IronFitBehavior, Polymer.IronResizableBehavior, Polymer.IronOverlayBehaviorImpl {
  }

  const IronOverlayBehavior: object;
}
