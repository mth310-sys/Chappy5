更新日: 2026-09-14

## 現在地点
- recordCount: **1749**
- latestRecordAdded: **ネオアイムジャグラーEX — No.1749**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-09-01_neo-im-juggler-ex.md`
- chronologicalFrontier: **2025-09-01**
- schema: **resetBehavior v0.7**
- status: **2025-09-01_GROUP_CLOSED_1_OF_1_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1748実レコードを再同期。
- INDEXは旧スナップショットのため、README規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1749 `ネオアイムジャグラーEX` を追加し、性能コア + resetBehavior v0.7を保存。
- 2025-09-01群を再監査。1geki 2025年9月新台スケジュールは同日「全1機種 0機種/1機種」でネオアイムジャグラーEXのみを掲載するため、PB・別型式・地域先行・延期/段階導入も再検索したうえでCLOSED判定。
- 既存COMPLETE_COREの性能完了判定は変更していない。

## No.1749 — ネオアイムジャグラーEX
- path: `docs/real_machine_db/machines/2025-09-01_neo-im-juggler-ex.md`
- manufacturer: **北電子 / KITA DENSHI**
- formalModel: **SネオアイムジャグラーEX-KK**
- inspectionCode: **4S0346**
- releaseDate: **2025-09-01**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.0 / 98.0 / 99.5 / 101.1 / 103.3 / 105.5%**
- BIG: **1/273.1 / 1/269.7 / 1/269.7 / 1/259.0 / 1/259.0 / 1/255.0**
- REG: **1/439.8 / 1/399.6 / 1/331.0 / 1/315.1 / 1/255.0 / 1/255.0**
- 合算: **1/168.5 / 1/161.0 / 1/148.6 / 1/142.2 / 1/128.5 / 1/127.5**
- base: **約40G/50枚（後発解析/理論補助値。主要初期解析は調査中のためSECONDARY扱い）**
- BIG約252枚 / REG約96枚
- 天井: **非搭載**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1749 resetBehavior v0.7
- resetQaStatus: **RESEARCHED_PARTIAL_MACHINE_SPECIFIC_RESET_DETAILS_NOT_PUBLICLY_FIXED**。
- 天井非搭載のため、設定変更専用のゲーム数天井リセット/短縮、据え置き天井進行、純電断天井進行はN/A。
- 朝一専用モード、設定変更専用モード、高確/低確等の継続管理状態、設定変更専用初当り優遇/保証ゲームは公開資料で確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更/据え置き/純電源OFF→ON時のボーナス成立状態・内部フラグ、有利区間の機種固有契約は直接資料を固定できず `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。旧アイムやシリーズ一般論から補完していない。
- 本機固有のガックン条件・発生率、ランプ/表示による設定変更確定判別も高優先資料・検索語変更後二次資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 公開朝一数値は、天井・朝一モード・恩恵率/不利率・ガックン率とも `NONE_FOUND_AFTER_RESEARCH` または `UNVERIFIED_AFTER_RESEARCH`。

## conflicts / source normalization
- 50枚あたりゲーム数は、なな徹が2025-08-26時点で「現在調査中」なのに対し、後発解析/シミュレーション系は約40G（条件別理論値は約41G前後）を掲載。`約40G` は性能コアの参考値として保持するがSECONDARY扱い。
- 東京スロカス情報局に導入日2024-11-05、設定3 REG 1/331.3という不整合値がある。一撃・なな徹・HAZUSE等で一致する2025-09-01、1/331.0をcanonicalとし、当該値は `CONFLICT_LIKELY_ERRONEOUS_SECONDARY_SOURCE` として不採用。

## 2025-09-01境界 — CLOSED 1/1 canonical
1. ネオアイムジャグラーEX — No.1749 DONE

boundaryAudit:
- 1geki 2025年9月新台スケジュールは2025-09-01を「全1機種 0機種 / 1機種」とし、スロットはネオアイムジャグラーEXのみ。
- HAZUSEは本機の導入開始日を2025-09-01として一致。
- PB/別型式・地域先行・延期/段階導入として同日独立レコード化すべき別スロット機種は今回の再監査で固定できず。
- よって2025-09-01群をCLOSED。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- GitHub実体ツリー/pathを基準にカーソル直後の既存実レコードを確定する方針を継続。今回もGitHubコード検索ではファイル名/本文を安全に一意解決できず、外部導入順から次レコードを推測して更新することはしていない。
- 既存COMPLETE_COREの性能完了判定は変更せず、reset QA状態は別管理を継続。
- retroQaStatus: **CURSOR_HELD_UNTIL_NEXT_EXISTING_RECORD_CAN_BE_UNIQUELY_RESOLVED**

## 次回再開地点
- 最新mainを再同期しNo.1749と本handoffを確認。
- **No.1750候補「クレアの秘宝伝 ～はじまりの扉と太陽の石～ ボーナストリガーver.」— 2025-09-08** から本線を継続する。
- 同日スロット候補は1gekiで4機: `クレアの秘宝伝 ～はじまりの扉と太陽の石～ ボーナストリガーver.` / `スマスロ 東京リベンジャーズ` / `SLOTドルアーガの塔` / `スマスロ ドルアーガの塔`。順序は最新mainと型式・全国導入日・PB/先行有無を再確認して固定する。
- 2025-09-08群完了後にPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。
- 性能コアに加え、設定変更/据え置き/電源OFF→ON、ゲーム数/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは正式型式・検定番号・メーカー・シリーズ名、リセット/朝一/据え置き/電源OFF ON/ガックン/有利区間へ検索語と資料系統を変えて再探索する。

## 今回の主要ソース
取得日: 2026-09-14

### No.1749 ネオアイムジャグラーEX
- HAZUSE 機種DB: https://hazuse.com/machine/pachislot/4S0346/
- 一撃 機種概要: https://1geki.jp/slot/s_nijex/
- なな徹 機種概要: https://nana-press.com/kaiseki/machine/978/
- なな徹 ボーナス確率/機械割: https://nana-press.com/kaiseki/machine/978/30873/
- なな徹 ボーナス概要: https://nana-press.com/kaiseki/machine/978/31568/
- パチ&スロ必勝本 通常時解説: https://hisshobon.com/machineinfo/87146/
- こぜログ 機種解析（ベース補助）: https://kozelog.net/machine/kitadenshi/neo-aim-juggler-ex/
- けんのスロットシミュレーション（ベース理論補助）: https://kenslo65536.com/sp/kaiseki/juggler-neo-im-ex.html

### 境界監査
- 1geki 2025年9月新台スケジュール: https://1geki.jp/newmachinecalender/202509/
