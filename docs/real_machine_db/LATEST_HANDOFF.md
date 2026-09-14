更新日: 2026-09-14

## 現在地点
- recordCount: **1744**
- latestRecordAdded: **マタドールIII — No.1744**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-08-04_matador-iii.md`
- chronologicalFrontier: **2025-08-04**
- schema: **resetBehavior v0.7**
- status: **2025-08-04_GROUP_OPEN_2_OF_6_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1743実レコードを再同期。
- INDEXは旧スナップショットのため、README規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1744 `マタドールIII` を追加し、性能コア + resetBehavior v0.7を保存。
- 2025-08-04群はcanonical 6機のうち2/6処理済みとしてOPENを維持。
- 既存COMPLETE_COREの性能完了判定は変更していない。

## No.1744 — マタドールIII
- path: `docs/real_machine_db/machines/2025-08-04_matador-iii.md`
- manufacturer: **北電子**
- formalModel: **LBマタドールIII TT**
- inspectionCode: **530169**
- releaseDate: **2025-08-04**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.4 / 98.9 / 100.3 / 103.5 / 106.5 / 110.0%**
- BIG: **1/278.9 / 1/268.6 / 1/260.1 / 1/244.5 / 1/231.6 / 1/219.9**
- REG: **1/434.0 / 1/417.4 / 1/402.1 / 1/362.1 / 1/334.4 / 1/299.3**
- combined: **1/169.8 / 1/163.4 / 1/157.9 / 1/146.0 / 1/136.8 / 1/126.8**
- base: **約36G/50枚**
- netIncrease: **NOT_APPLICABLE_REAL_BONUS_BT**
- basicPayout: **BIG最大約302枚（BT込み） / REG最大約104枚**
- normalCeiling: **NONE**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1744 resetBehavior v0.7
- 天井非搭載。設定変更時の天井RESET/短縮、据え置き/電断時の天井引継ぎはNOT_APPLICABLE。
- 天井管理用の通常A/B、天国、CZ/ATモード等は確認されず、朝一専用モード/固定ゾーンも確認されない。
- 設定変更専用の朝一高確、CZ優遇、初当たり優遇、短縮天井などの公開恩恵は十分な再探索後もNONE_CONFIRMED_AFTER_RESEARCH。
- 設定変更/据え置き/純電断時のボーナス成立状態・BT状態を直接比較した機種固有高優先資料は固定できずUNVERIFIED_AFTER_RESEARCH。
- 本機固有の有利区間RESET/CARRY_OVER契約も直接資料を固定できずUNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH。スマスロ/BT機一般論から補完していない。
- 本機固有ガックン条件・発生率、ランプ/表示による設定変更確定判別はUNVERIFIED_AFTER_RESEARCH。
- ボーナス確率、BT中1枚役、ボーナス終了時パネルフラッシュは設定推測要素であり、設定変更/据え置き判別とは分離。
- 公開朝一数値は固定できる専用値なし。

## conflicts / source normalization
- ジャグラーズネットの「メーカー公表値」表は設定4〜6のBIG/REG/合算欄に北電子公式・遊技通信・P-WORLD・必勝本・一撃と不一致の値が混在し、同表内で算術整合も崩れるため `CONFLICT_LIKELY_TABLE_TRANSCRIPTION_ERROR` として隔離。canonicalは複数高優先資料で一致する値を採用。

## 2025-08-04境界 — OPEN 2/6 canonical
1. パチスロなめ猫～液晶ないけどなめんじゃねぇ～ — No.1743 DONE
2. マタドールIII — No.1744 DONE
3. パチスロ 転生したら剣でした — NEXT
4. L アズールレーン THE ANIMATION — QUEUED（2025-07-23京楽直営店フィールドテスト先行導入注記）
5. L ダーリン・イン・ザ・フランキス — QUEUED
6. L咲-Saki-頂上決戦 — QUEUED

boundaryAudit:
- 1geki 2025年8月新台スケジュールは2025-08-04にパチスロ6機を掲載し、上記6機と一致。
- Slot Calendarも2025-08-04予定として同6機を掲載。
- 情報島の過去新台一覧はなめ猫を当日一覧から欠落させる版があり、1geki/Slot Calendar/機種固有導入日と照合して6機canonicalを維持。
- 6機処理後にPB・別型式・地域先行・延期/段階導入を再監査しCLOSED判定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- カーソル直後の既存実レコードをGit tree/pathで安全に一意確定できるまで遡及QAカーソルは保持する。
- 外部導入順からGitHub内部の次レコードを推測しない。
- 既存COMPLETE_COREの性能完了判定は変更せず、reset QA状態は別管理を継続。
- retroQaStatus: **CURSOR_HELD_UNTIL_NEXT_EXISTING_RECORD_CAN_BE_UNIQUELY_RESOLVED**

## 次回再開地点
- 最新mainを再同期しNo.1744と本handoffを確認。
- **No.1745候補「パチスロ 転生したら剣でした」— 2025-08-04** から本線を継続する。
- 性能コアに加え、設定変更/据え置き/電源OFF→ON、ゲーム数/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは正式型式・検定番号・メーカー・シリーズ名、リセット/朝一/据え置き/電源OFF ON/ガックン/有利区間へ検索語と資料系統を変えて再探索する。
- 遡及QAは `2007-07-09_genju-haou-t.md` 直後の「既存実レコード」をGit tree/pathで一意確定できた時点から再開する。

## 今回の主要ソース
取得日: 2026-09-14

### No.1744 マタドールIII
- 北電子公式: https://www.kitadenshi.co.jp/products/2025/mtd3/
- 遊技通信: https://www.yugitsushin.jp/news/%E3%83%9C%E3%83%BC%E3%83%8A%E3%82%B9%E3%83%88%E3%83%AA%E3%82%AC%E3%83%BC%E3%82%92%E6%90%AD%E8%BC%89%E3%81%97%E3%81%A6a-300%E5%BE%A9%E6%B4%BB%EF%BC%81%E3%80%8C%E3%83%9E%E3%82%BF%E3%83%89%E3%83%BC/
- HAZUSE: https://hazuse.com/hd/530169-2/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/87419/
- 必勝本 ボーナス: https://hisshobon.com/machineinfo/87407/
- 必勝本 BT: https://hisshobon.com/machineinfo/87408/
- 一撃 機種トップ: https://1geki.jp/slot/l_mtd3/
- 一撃 天井/朝一: https://1geki.jp/slot/l_mtd3/3/
- 一撃 ボーナス: https://1geki.jp/slot/l_mtd3/61/
- P-WORLD: https://www.p-world.co.jp/machine/database/10287
- 日刊スポーツ: https://www.nikkansports.com/amusement/pachislot/news/202505120000819.html
- ジャグラーズネット（競合確認用）: https://jugglersnet.com/bt/matador3

### 境界監査（前リレーから継承）
- 1geki 2025年8月新台スケジュール: https://1geki.jp/newmachinecalender/202508/
- Slot Calendar 2025-08-04: https://sulocale.sulopachinews.com/archives/%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88/8%E6%9C%884%E6%97%A5%E5%B0%8E%E5%85%A5%E9%96%8B%E5%A7%8B%E4%BA%88%E5%AE%9A%E6%A9%9F%E7%A8%AE
- 情報島 過去新台一覧: https://p-johojima.jp/machine_spec/post-2074/
