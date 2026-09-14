更新日: 2026-09-15

## 現在地点
- recordCount: **1754**
- latestRecordAdded: **マジカルハロウィン ボーナストリガー — No.1754**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-09-22_magical-halloween-bonus-trigger.md`
- chronologicalFrontier: **2025-09-22**
- schema: **resetBehavior v0.7**
- status: **2025-09-22_BOUNDARY_CLOSED_1_OF_1_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1753を再同期。
- INDEXは旧スナップショットのため、README規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1754 `マジカルハロウィン ボーナストリガー` を追加し、性能コア + resetBehavior v0.7を保存。
- 2025-09-22群は月間導入カレンダー/複数年次一覧でパチスロ1機として再確認し、PB・別型式・地域先行・延期/段階導入を再監査してCLOSED。
- 既存COMPLETE_COREの性能完了判定は変更していない。

## No.1754 — マジカルハロウィン ボーナストリガー
- path: `docs/real_machine_db/machines/2025-09-22_magical-halloween-bonus-trigger.md`
- manufacturer: **グレードワン（製造） / コナミアミューズメント（販売・ブランド）**
- formalModel: **LBマジカルハロウィンGN**
- inspectionCode: **5S0016**
- releaseDate: **2025-09-22**
- settings: **1 / 2 / 5 / 6**
- payoutRate: **97.5 / 99.3 / 104.2 / 108.1%**
- BIG: **1/299.3 / 1/295.2 / 1/273.1 / 1/262.1**
- REG: **1/390.1 / 1/346.8 / 1/300.6 / 1/262.1**
- combined: **1/169.3 / 1/159.5 / 1/143.1 / 1/131.1**
- base: **約36.8〜37.0G/50枚（複数二次解析一致、必勝本は調査中）**
- BIG最大111枚+BT / REG最大111枚 / BT BONUS最大107枚 / BIG初当り含むBT期待枚数約325枚
- 天井非搭載
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1754 resetBehavior v0.7
- 天井非搭載のためゲーム数天井RESET/短縮・据え置き/電断天井進行はN/A。
- 設定変更時、必勝本の機種別表でキャラカスタム=アリス、演出モード=アリスモード、ボナ連カスタム=100G間、当選ゲームコレクション=リセットを確認。
- 純電源OFF→ONでは当選ゲームコレクションのリセットを確認。他のカスタムは資料上「現在調査中」。
- コナミ公式開発者Q&Aで本機は**有利区間なし**と確認。よってsettingChange/carryOver/powerCycleの有利区間項目はN/A。
- 朝一専用モード、天井短縮、高確保証、初当り優遇等は `NONE_CONFIRMED_AFTER_RESEARCH`。ちょんぼりすたも朝一リセット恩恵は特に無しと整理。
- ボーナス成立内部フラグ/BT途中状態の設定変更・据え置き・純電断3条件比較は公開資料を固定できず `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。
- 本機固有ガックン条件・発生率、確定的な変更判別は `UNVERIFIED_AFTER_RESEARCH`。

## conflicts / source normalization
- 設定5は必勝本・なな徹・パチビー・ちょんぼりすた等が BIG約1/273 / REG約1/301 / 合算約1/143 / 104.2%で一致。一方ジャグラーズネットのみ BIG1/284.9 / REG1/358.1 / 合算1/158.7 / 101.2%を「メーカー公表値」として掲載。多数一致側をcanonical、後者を `CONFLICT_SETTING5_ALTERNATE_TABLE_284_9_358_1_158_7_101_2` として保持。
- ベースは36.8〜37.0Gの複数二次資料一致を採用するが、必勝本は調査中のためOFFICIAL/HIGH扱いに引き上げない。
- メーカー表記は製造元グレードワンと販売/ブランドのコナミアミューズメントを分離。

## 2025-09-22境界 — CLOSED 1/1 canonical
1. マジカルハロウィン ボーナストリガー — No.1754 DONE

boundaryAudit:
- 直前handoffの1geki 2025年9月スケジュール監査で2025-09-22のパチスロは本機1機。
- 年次導入一覧でも9/22群は本機のみ、次の全国導入パチスロ群は2025-10-06。
- 型式 `LBマジカルハロウィンGN` はHAZUSE/検定通過記事/業界資料で一致。
- 追加PB・別型式・地域先行・延期/段階導入を機種名・型式・製造元で再探索し、同日追加canonicalは確認せずCLOSED。

## 次回再開地点
- 最新mainを再同期しNo.1754と本handoffを確認。
- **No.1755候補「スマスロ 新鬼武者3」— 2025-10-06** から本線を継続する。
- 2025-10-06群のknown canonicalは現時点3機: `スマスロ 新鬼武者3` / `L主役は銭形5` / `スマスロ バベル`。原則この順で処理し、3機完了後にPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。
- 性能コアに加え、設定変更/据え置き/電源OFF→ON、ゲーム数/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは正式型式・検定番号・メーカー・シリーズ名、リセット/朝一/据え置き/電源OFF ON/ガックン/有利区間へ検索語と資料系統を変えて再探索する。

## retro resetBehavior QA side-queue
- 本線新規収集を止めず、既存機種へのv0.7遡及は別QAリレーで継続。
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 既存COMPLETE_COREの性能完了判定は変更せず、reset QA状態は別管理を継続。
- retroQaStatus: **CURSOR_HELD_UNTIL_NEXT_EXISTING_RECORD_CAN_BE_UNIQUELY_RESOLVED**
