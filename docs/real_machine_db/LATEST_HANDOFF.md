更新日: 2026-09-08

## 現在地点
- recordCount: **1032**
- latestRecordAdded: **パチスロニュースモモチャンEX-30**（ニューギン）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-12-19_news-momochan-ex-30.md`
- chronologicalFrontier: **2016-12-19**
- frontierLatestMachine: **パチスロニュースモモチャンEX-30 — No.1032**
- schema: **resetBehavior v0.7**
- status: **2016-12-12_GROUP_CLOSED_FOR_CURRENT_RESEARCH / 2016-12-13_TO_2016-12-18_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH / 2016-12-19_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1030実レコードを再取得して開始。
- `INDEX.md` は19件時点の旧集約のため、README規定どおり最新 `LATEST_HANDOFF.md` + main実レコードを進捗正本として使用。
- handoff正本 **1030件 / chronologicalFrontier 2016-12-19 / 12/19群OPEN** から継続。
- 次未処理だったニューギン `パチスロニュースモモチャンEX` を調査した結果、25Φと30Φはボーナス確率共通でも機械割・型式・検定番号が異なる独立スペックと確認。全機種方針に従い2レコードへ分離。
- No.1031 `パチスロニュースモモチャンEX`（25Φ）とNo.1032 `パチスロニュースモモチャンEX-30` を追加。
- 12/19群はまだOPEN。次未処理は藤商事 `パチスロ ロリポップチェーンソー`。

## No.1031 — パチスロニュースモモチャンEX
- manufacturer: **ニューギン**
- releaseDate canonical: **2016-12-19**
- formalModelName: **ニュースモモチャンEX**
- certificationNumber: **6S0257**
- generation/system: **5号機 / ノーマルA / 完全告知 / 25Φ**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_BASE_PENDING**

### performanceCore
- 機械割: **97.3 / 98.27 / 100.62 / 103.03 / 105.36 / 108.06%**。
- BIG: **1/287.4 / 282.5 / 282.5 / 273.1 / 273.1 / 268.6**。
- REG: **1/455.1 / 442.8 / 348.6 / 321.3 / 268.6 / 268.6**。
- 合算: **1/176.2 / 172.5 / 156.0 / 147.6 / 135.4 / 134.3**。
- BIG最大325枚、REG最大104枚。
- baseGamesPer50: 検索語・資料系統変更後も **UNVERIFIED_AFTER_RESEARCH**。

### resetBehavior v0.7
- 通常ゲーム数天井、AT/ART/CZ、長期モード/周期/ポイントは非搭載のため、ホール経営上のマクロリセット進捗は **NOT_APPLICABLE**。
- gameCounterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING**。
- modeAfterReset: **NOT_APPLICABLE_NO_LONG_TERM_MODE**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 設定変更専用の高確/短縮天井/特定G以内当選優遇/公開朝一数値: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 本機固有ガックン/初期出目/ランプ等の変更判別: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更/据え置き/純電源OFF→ON時の一時内部状態・成立済みボーナス等の直接契約は、一般Aタイプから推測せず **UNVERIFIED_AFTER_RESEARCH**。

## No.1032 — パチスロニュースモモチャンEX-30
- manufacturer: **ニューギン**
- releaseDate canonical: **2016-12-19**
- formalModelName: **ニュースモモチャンEX-30**
- certificationNumber: **6S0319**
- generation/system: **5号機 / ノーマルA / 完全告知 / 沖スロ / 30Φ**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_BASE_PENDING**

### performanceCore
- 機械割: **95.9 / 96.7 / 98.7 / 100.8 / 102.8 / 105.2%**。
- BIG/REG/合算は25Φと同一系列。
- BIG最大325枚、REG最大104枚。
- baseGamesPer50: 検索語・資料系統変更後も **UNVERIFIED_AFTER_RESEARCH**。
- 25Φの機械割を30Φへ流用しない。

### resetBehavior v0.7
- 25Φ同様、ゲーム数天井/AT/ART/CZ/長期モードは非搭載。
- gameCounterReset / ceilingAfterReset / modeAfterReset: **NOT_APPLICABLE**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 設定変更専用朝一恩恵/不利、公開朝一数値、本機固有変更判別: 再探索後も **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更/据え置き/純電源OFF→ON時の一時内部状態直接契約: **UNVERIFIED_AFTER_RESEARCH**。

## identity / quality
- 鹿児島県公安委員会告示で25Φ **ニュースモモチャンEX / 6S0257**、30Φ **ニュースモモチャンEX-30 / 6S0319** を同一告示内で直接確認。
- P-MEDIA JAPANの2016-06-20検定通過記事も25Φ+30Φの別型式を確認。
- 遊技通信web転載の2016-10-22記事は両仕様の内覧会、完全告知ノーマル、BB325枚/RB104枚を報道。
- P-WORLDと5号機クロニクルで両仕様のボーナス確率・各機械割を照合。25Φと30Φは同じボーナス確率でも機械割が明確に異なる。
- HAZUSEで25Φの導入日 **2016-12-19** を確認。ALL7はニュースモモチャンEXを同日予定、中古実機横断DBは25Φ/30Φとも2016-12-19掲載。30Φ exact dateはこれらを合わせてcanonicalとするが、25Φより直接性が一段低い。

## 2016-12-19群 — OPEN
登録済み:
- **SHAKE III（シェイク3）**（大都技研）— No.1029
- **スーパービンゴ リゾート**（ベルコ）— No.1030
- **パチスロニュースモモチャンEX**（ニューギン / 25Φ）— No.1031
- **パチスロニュースモモチャンEX-30**（ニューギン / 30Φ）— No.1032

未処理先行候補:
1. **パチスロ ロリポップチェーンソー**（藤商事）
2. **パチスロ犬夜叉**（ロデオ）
3. **麻雀格闘倶楽部2**（KPE）
- ALL7 2016年12月一覧ではいずれも2016-12-19導入予定。メーカー/HAZUSE/P-WORLD/当時業界資料で実導入日・型式・重複を再固定してから登録する。

## 境界監査
- **2016-12-12_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- **2016-12-13_TO_2016-12-18_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。
- chronologicalFrontierは **2016-12-19**、同日群はOPEN。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規本線を止めず、既存未QAレコードを最新main実体から順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1032を再取得。
2. **1032件 / chronologicalFrontier 2016-12-19 / 12/19群OPEN** を正本として継続。
3. 次未処理の **藤商事 `パチスロ ロリポップチェーンソー`** をNo.1033候補として処理。導入日・型式・検定番号・重複を再確認する。
4. その後、**犬夜叉 → 麻雀格闘倶楽部2**を先行候補とし、12/19同日全メーカー監査を継続。
5. 各機種で性能コアに加え、設定変更/据え置き/純電源OFF→ON、ゲーム数/CZ/周期/ポイント、モード/状態、朝一恩恵/不利、変更判別、公開リセット数値を検索語・資料系統変更で徹底調査する。
6. PARTIAL/UNVERIFIEDは機種名・型式名・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン等を組み替え、公式・業界・当時解析・古いDB・アーカイブ/回顧資料を横断後のみ確定。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-08
### No.1031 / No.1032 ニュースモモチャンEX 25Φ / 30Φ
- 鹿児島県公報 第3220号（公安委員会告示）: https://www.pref.kagoshima.jp/ab04/kensei/jourei/kouhou/1606/documents/52430_20160613103640-1.pdf
- HAZUSE 25Φ: https://hazuse.com/en/machine/pachislot/6S0257/
- P-WORLD 25Φ: https://www.p-world.co.jp/machine/database/8203
- P-WORLD 30Φ: https://www.p-world.co.jp/machine/database/8204
- 長崎県遊技業協同組合 / 遊技通信web転載: https://nagasaki-yukyo.or.jp/information/%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%AE%E3%83%B3%E3%81%8C%E3%80%81%E3%82%AA%E3%83%AA%E3%82%B8%E3%83%8A%E3%83%AB%E3%82%AD%E3%83%A3%E3%83%A9%E3%81%A7%E3%83%8E%E3%83%BC%E3%83%9E%E3%83%AB%E6%A9%9F%E3%82%92/
- P-MEDIA JAPAN検定通過: https://p-media.info/%E3%83%8E%E3%83%BC%E3%83%9E%E3%83%AB%E3%82%B9%E3%83%9A%E3%83%83%E3%82%AF%E3%81%AE%E3%83%AA%E3%83%90%E3%82%A4%E3%83%90%E3%83%AB%E6%B4%BB%E7%99%BA%EF%BC%8F%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B9%E3%83%A2/
- 5号機クロニクル: https://5goki.com/newgin-excite
- パチマガスロマガ 30Φ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/40/newgin_slot_40.php
- スロズバ: https://slozuva.com/?MK=36
- ALL7 2016年12月: https://www.all7.jp/plans/index/2016/12

### 境界 / 次候補
- HAZUSE 新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/
- ALL7 2016年12月: https://www.all7.jp/plans/index/2016/12
