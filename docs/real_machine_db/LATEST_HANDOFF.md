更新日: 2026-09-15

## 現在地点
- recordCount: **1756**
- latestRecordAdded: **L主役は銭形5 — No.1756**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-10-06_l-shuyaku-wa-zenigata5.md`
- chronologicalFrontier: **2025-10-06**
- schema: **resetBehavior v0.7**
- status: **2025-10-06_BOUNDARY_OPEN_2_OF_3_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1755を再同期。
- INDEXは旧スナップショットのため、README規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- 最新mainがNo.1755 `スマスロ 新鬼武者3` まで進んでいたため、重複せず次の未処理No.1756 `L主役は銭形5` から継続。
- No.1756 `L主役は銭形5` を追加し、性能コア + resetBehavior v0.7を保存。
- 2025-10-06群known canonical 3機のうち2/3処理済み。残り `スマスロ バベル` 完了後にPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。
- 既存COMPLETE_COREの性能完了判定は変更していない。

## No.1756 — L主役は銭形5
- path: `docs/real_machine_db/machines/2025-10-06_l-shuyaku-wa-zenigata5.md`
- manufacturer: **オリンピア（製造） / 平和（ブランド）**
- formalModel: **L銭形5L2**
- inspectionCode: **5S0796**
- releaseDate: **2025-10-06**
- settings: **2 / 3 / 4 / 5 / 6**
- payoutRate: **97.9 / 99.0 / 103.2 / 107.1 / 112.1%**
- ボーナス初当り: **1/424.5 / 1/416.4 / 1/388.1 / 1/375.9 / 1/300.5**
- base: **約32.2G/50枚**
- 純増: **銭形BONUS / BIG BONUS 約7.0枚/G**
- 銭形BONUS: **初当り時基本100枚 / ST中100〜3000枚・平均313.5枚（設定2）**
- BIG BONUS: **500〜3000枚 / 平均650枚以上（設定2）**
- STデカタイム: **10G+α / 成功期待度約59%（設定2）**
- 上位ST超デカタイム: **10G+α / 成功期待度約80%（設定2）**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1756 resetBehavior v0.7
- 設定変更時は有利区間RESET。通常最大天井 **1250G+α → 最大850G+α** へ短縮。
- 設定変更時は内部ゲーム数をランダム加算するため、実消化天井は850Gより浅くなる場合あり。
- モードは通常A/B/C/天国の4種。設定変更時（有利区間移行時）に再抽選。具体的な朝一モード完全振り分けは高優先資料でも調査中のため `PUBLIC_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH`。
- ちょんぼりすた機種別朝一比較表では設定変更時の内部状態はRESET、純電源OFF→ONでは天井・内部状態を引継ぎ。
- 朝一表示は設定変更/純電断とも液晶G数 `???`、捜査pt 999、開始ステージ市街地。外見だけでは変更判別不可。
- 据え置きでは天井進行と捜査pt内部進行を引き継ぐ二次解析あり。純据え置き時モードの個別直接文言は固定できずUNVERIFIEDを維持。
- なな徹は有利区間リセット契機に設定変更時を明記。ただし有利区間リセット後の700枚以上BIG恩恵は **設定変更時を除く** ため朝一恩恵には混入しない。
- 朝一実消化が850G+αを超えてボーナス非当選なら据え置き推測の強材料。
- 有利区間ランプによる変更/据え置き判別は不可。
- 本機固有ガックン条件/発生率は表記・型式・検索語・資料系統を変えて再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 公開朝一数値: **最大850G+α / 内部Gランダム加算 / 表示捜査pt999**。ランダム加算範囲・捜査pt内部ランダム調整範囲は未公開。

## conflicts / source normalization
- 設定2〜6の初当り、出玉率、約32.2G/50枚、純増約7.0枚/Gは複数解析で一致し、重大な性能コアCONFLICTなし。
- HAZUSEのベース欄は「設定1 約32.2G」とラベル表示する一方、同ページの設定表および一撃等は設定2〜6の5段階。設定1は存在しないため、約32.2Gのみ採用し設定1ラベルを `CONFLICT_LIKELY_TEMPLATE_LABEL_ERROR` として隔離。
- 朝一0G期待値は算出条件により、なな徹シミュレーターの等価-1,009円と外部実戦推定のプラス値が競合。平均せず `CONFLICT_EXPECTED_VALUE_ASSUMPTIONS` とし性能コアには不採用。
- 通常A1250G到達時の約50%不二子デカタイムと、設定変更後最大850G+αは別契約。深天井恩恵を朝一リセット恩恵へ混入しない。

## 2025-10-06境界 — OPEN 2/3 known canonical
1. スマスロ 新鬼武者3 — No.1755 DONE
2. L主役は銭形5 — No.1756 DONE
3. スマスロ バベル — No.1757 CANDIDATE

boundaryAudit:
- 直前handoffが2025-10-06群のknown canonicalを上記3機として候補化済み。
- No.1756導入日はオリンピア公式発売年一覧、Amusement Japan、HAZUSE、パチビー、一撃、P-WORLD等で2025-10-06一致。
- 3機完了前のため境界はOPENを維持。No.1757完了後にPB・別型式・地域先行・延期/段階導入を最終再監査してCLOSED判定する。

## 次回再開地点
- 最新mainを再同期しNo.1756と本handoffを確認。
- **No.1757候補「スマスロ バベル」— 2025-10-06** から本線を継続する。
- No.1757完了後、2025-10-06群のPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定し、次の全国導入日へ進む。
- 性能コアに加え、設定変更/据え置き/電源OFF→ON、ゲーム数/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは正式型式・検定番号・メーカー・シリーズ名、リセット/朝一/据え置き/電源OFF ON/ガックン/有利区間へ検索語と資料系統を変えて再探索する。

## retro resetBehavior QA side-queue
- 本線新規収集を止めず、既存機種へのv0.7遡及は別QAリレーで継続。
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 既存COMPLETE_COREの性能完了判定は変更せず、reset QA状態は別管理を継続。
- retroQaStatus: **CURSOR_HELD_UNTIL_NEXT_EXISTING_RECORD_CAN_BE_UNIQUELY_RESOLVED**
