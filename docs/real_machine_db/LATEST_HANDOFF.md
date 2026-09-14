更新日: 2026-09-15

## 現在地点
- recordCount: **1758**
- latestRecordAdded: **L 荒野のコトブキ飛行隊 — No.1758**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-10-20_l-kouya-no-kotobuki-hikoutai.md`
- chronologicalFrontier: **2025-10-20**
- schema: **resetBehavior v0.7**
- status: **2025-10-20_BOUNDARY_OPEN_1_OF_2_KNOWN_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードを再同期。
- INDEXは旧スナップショットのため、README規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1757 `スマスロ バベル` を追加し、2025-10-06群を3/3 CLOSED。
- 続いてNo.1758 `L 荒野のコトブキ飛行隊` を追加し、性能コア + resetBehavior v0.7を保存。
- 2025-10-20群known canonical 2機のうち1/2処理済み。残り `SHAKE BONUS TRIGGER` 完了後にPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。
- 既存COMPLETE_COREの性能完了判定は変更していない。

## No.1757 — スマスロ バベル
- path: `docs/real_machine_db/machines/2025-10-06_smart-slot-babel.md`
- manufacturer: ユニバーサルブロス
- formalModel: L／バベル／BA / inspectionCode: 4S0446
- releaseDate: 2025-10-06
- payoutRate: 97.4 / 99.1 / 101.6 / 104.8 / 107.5 / 110.0%
- firstBonus: 1/538.3 → 1/467.6
- base: 約31.9G/50枚 / 純増約6.0枚/G
- reset: 通常最大1280G→900G、設定変更モード31.6/65.2/2.3/0.4/0.4%、据え置きは天井/ゲーム数/モード/サソリ回数/有利区間を引継ぎ。
- 2025-10-06境界は新鬼武者3 / 主役は銭形5 / バベルの3/3 CLOSED。

## No.1758 — L 荒野のコトブキ飛行隊
- path: `docs/real_machine_db/machines/2025-10-20_l-kouya-no-kotobuki-hikoutai.md`
- manufacturer: **スパイキー（製造） / フィールズ（販売）**
- formalModel: **L荒野のコトブキ飛行隊SS**
- inspectionCode: **5S0846**
- releaseDate: **2025-10-20**
- settings: **L / 2 / 3 / 4 / 5 / 6**
- payoutRate(setting2-6): **97.4 / 98.8 / 102.5 / 106.2 / 110.8%**
- CZ(setting2-6): **1/212.0 / 1/213.8 / 1/218.0 / 1/219.8 / 1/225.1**
- AT(setting2-6): **1/414.9 / 1/391.0 / 1/356.2 / 1/339.8 / 1/318.9**
- base: **約35G/50枚（設定2）**
- 純増: **約7.0枚/G**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1758 resetBehavior v0.7
- 設定変更時はゲーム数天井・内部状態・有利区間をRESET。CZスルー天井も設定変更専用振り分けへ再抽選。
- 通常最大ゲーム数天井 **1500G+α → 1400G+α**。
- 設定変更時ゲーム数天井振り分け: **500G 1.6% / 800G 75.0% / 1100G 11.7% / 1400G 11.7%**。
- 設定変更時CZスルー天井: **0スルー20.3% / 1スルー31.3% / 2スルー37.5% / 4スルー7.8% / 6スルー3.1%**。0〜2スルー合算 **89.1%**。
- 据え置き時はゲーム数天井進行・CZスルー進行等を引継ぐ機種別二次解析あり。
- 純電源OFF→ONはちょんぼりすた比較表で天井・内部状態を引継ぎ。
- 純電断時のCZスルー回数/CZポイント/有利区間を独立明記する高優先資料は再探索後も固定できずUNVERIFIED。
- 有利区間ランプによる変更/据え置き判別不可。
- 本機固有ガックン条件/発生率は型式・メーカー・朝一/設定変更/据え置き等で再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- 設定Lの具体性能数値は公開表にないため推測していない。

## conflicts / source normalization
- No.1758の設定2〜6 CZ/AT/出玉率、約35G/50枚、純増約7.0枚/GはG-net、P-WORLD、複数解析で一致し重大CONFLICTなし。
- CZスルー天井は資料により「0/1/2/4/6スルー」と「1/2/3/5/7回目CZ」の表現差があるため、意味を対応付けて原表現を混同しない。
- No.1757ではG-net出玉率の一部が複数解析と競合するため、平均せずCONFLICTとしてレコードに保持。

## 2025-10-20境界 — OPEN 1/2 known canonical
1. L 荒野のコトブキ飛行隊 — No.1758 DONE
2. **SHAKE BONUS TRIGGER — No.1759 CANDIDATE**

boundaryAudit:
- 情報島の過去新台一覧とALL7月間一覧は2025-10-20のパチスロとして上記2機を掲載。
- 2機完了前のためOPEN維持。No.1759完了後にPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。

## 次回再開地点
- 最新mainを再同期しNo.1758と本handoffを確認。
- **No.1759候補「SHAKE BONUS TRIGGER」— 2025-10-20** から本線を継続する。
- No.1759完了後、2025-10-20境界を最終再監査してCLOSED判定し、次の全国導入日へ進む。
- 性能コアに加え、設定変更/据え置き/電源OFF→ON、ゲーム数/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは正式型式・検定番号・メーカー・シリーズ名、リセット/朝一/据え置き/電源OFF ON/ガックン/有利区間へ検索語と資料系統を変えて再探索する。

## retro resetBehavior QA side-queue
- 本線新規収集を止めず、既存機種へのv0.7遡及は別QAリレーで継続。
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 既存COMPLETE_COREの性能完了判定は変更せず、reset QA状態は別管理を継続。
- retroQaStatus: **CURSOR_HELD_UNTIL_NEXT_EXISTING_RECORD_CAN_BE_UNIQUELY_RESOLVED**
