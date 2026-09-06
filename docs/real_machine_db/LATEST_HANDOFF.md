# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **787**
- latestMachineAddedByChronology: **シティーハンター**（オリンピア）
- latestRecord: `docs/real_machine_db/machines/2014-01-06_city-hunter.md`
- chronologicalFrontier: **2014-01-06**
- schema: **resetBehavior v0.7**
- status: **2014-01-06_GROUP_OPEN**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-12-16_yoshimune-2013.md` を再読。
- INDEXは旧集約状態のためREADME規定どおり **LATEST_HANDOFF + 実レコード**を正本扱い。
- 作業開始時正本は recordCount 786 / chronologicalFrontier 2013-12-16 / 12-16群OPEN。
- 2013-12-16同日群を当時新台カレンダー / 業界記事 / 機種DBで横断監査。
- 同日候補に見える「鋼殻のレギオス」は、大都技研の当時業界記事で **パチンコ新機種「CR鋼殻のレギオス」**と確認したためパチスロ本線から除外。
- 登録済みの `SLOT魔法少女まどか☆マギカ` と `吉宗（2013年）` 以外に12/16の未登録パチスロ確定候補を固定できず、**2013-12-16_GROUP_CLOSED**。
- 2013-12-17以降を監査し、次の強い具体日アンカー **2014-01-06**へ前進。
- 2014-01-06群の先頭候補 **「シティーハンター」**を787件目として追加。

## 今回追加 — シティーハンター

### identity / 性能コア

- manufacturer: **オリンピア**。
- modelName: **シティーハンターA1**。
- approvalNumber: **3S0879**。
- hall start: **2014-01-06**（K-Navi / HAZUSE / ALL7）。
- generation/system: **5号機 / 疑似ボーナス + AT / CZ / 内部モード・状態 / 天井**。
- 機械割: **96.6 / 97.5 / 100.3 / 103.5 / 108.4 / 113.9%**。
- AT初当たり: **1/583.3 / 567.5 / 548.1 / 501.8 / 460.6 / 417.6**。
- 疑似ボーナス合算: **1/199.4 / 190.4 / 183.4 / 177.2 / 160.4 / 151.9**。
- baseGamesPer50: **約31.1G/50枚**。
- AT「ハンターRUSH」: **初期40 / 100 / 150 / 200 / 300G+α / 純増約2.7枚/G**。
- 天井: **999G**、到達時 **80%継続AT**が公開恩恵。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED**。

### resetBehavior v0.7

- 設定変更時は **天井ゲーム数CLEAR**。2014年当時攻略資料の複数系統で確認。
- 設定変更後は、規定ゲーム数系のモードと小役系の内部状態について公開朝一振り分けあり。
- 設定変更時モード（公開確認できた設定1）:
  - モードA **89%** / B **10%** / C **1%**。
  - 解説文には設定差が小さい旨があるが、設定2～6の具体値は推測補完しない。
- 設定変更時状態:
  - 設定1～3: 通常A **45%** / 通常B **50%** / 高確 **5%**。
  - 設定4～5: 通常A **40%** / 通常B **50%** / 高確 **10%**。
  - 設定6: 通常A **30%** / 通常B **50%** / 高確 **20%**。
- 設定変更専用の固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 純据え置き時の天井G / モード / 状態の直接保持契約は、表記揺れ・型式・メーカー・据え置き/宵越し/朝一等へ検索語を変えて再探索したが `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更なしの電源OFF→ONについても「電源OFF ON / 電源オフ / 電断」等で再探索したが直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 朝一、レア役前の夕方/夜ステージ移行は高確の可能性を高める当時解析があり、変更/高設定推測の **PROBABILISTIC_MORNING_SIGNAL** として保存。確定判別ではない。
- 本機固有ガックン等の確定的変更判別は `NONE_CONFIRMED_AFTER_RESEARCH`。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。

## safeguards

- 2007年銀座製「パチスロ シティーハンター」は別機種。BIG/REG+RT仕様を2014年オリンピア機へ混入しない。
- ALL7のメーカー欄「オリンピア・ゴールドオリンピア」はグループ表記として保持し、型式DB/K-Navi/P-WORLDに合わせmanufacturer本線はオリンピア。
- 「通常時999G」と「ボーナス＆AT間999G」は資料表現差を注記し、定義を勝手に統合しない。

## 12/16同日群監査

処理済み:
- **SLOT魔法少女まどか☆マギカ**（メーシー） — 785件目。
- **吉宗（2013年）**（大都技研） — 786件目。

除外確認:
- **鋼殻のレギオス** — 当時業界一次系記事で **パチンコ「CR鋼殻のレギオス」**と確認。

判定: **2013-12-16_GROUP_CLOSED**。

## 2014-01-06同日群

処理済み:
- **シティーハンター**（オリンピア） — 787件目。

未処理の具体日候補:
- **トラック野郎**（ニューギン） — ALL7 2014-01-06。
- **パチスロ仮面ライダーUNLIMITED**（タイヨーエレック） — ALL7 2014-01-06。
- **激闘！西遊記**（KPE） — アタリ7で2014-01-06。

群は **OPEN**。上記を順に処理し、全メーカー監査後にCLOSED判定する。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- 今回は本線787件目を優先。既存性能coreStatusは変更なし。reset QAは性能完了判定とは別管理を維持。

## 次回再開地点

1. **recordCount 787 / chronologicalFrontier 2014-01-06 / 01-06群OPEN** から開始。
2. 次の未処理候補 **「トラック野郎」（ニューギン）**を788件目候補として性能コア + resetBehavior v0.7収集。
3. 続いて同日群の **パチスロ仮面ライダーUNLIMITED → 激闘！西遊記**を漏れ防止優先で処理。
4. 01-06同日群をメーカー公式/業界導入一覧/当時解析DB/古い新台カレンダーで最終横断監査後にCLOSED判定。
5. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順で継続。
6. PARTIAL / UNVERIFIEDは公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで系統を変えて再探索し、競合は平均せずCONFLICT保持。

## 主要出典 — 取得日 2026-09-06

- K-Navi シティーハンター: `https://p-kn.com/slot/1975/`
- P-WORLD シティーハンター: `https://www.p-world.co.jp/machine/database/7265`
- HAZUSE シティーハンター: `https://hazuse.com/machine/pachislot/3S0879/`
- HAZUSE AT/ART: `https://hazuse.com/machine/pachislot/3S0879/genre/209/`
- 期待値見える化 2014-01-23 朝一設定変更後: `https://slotjin.com/slot/cityhunter-asaichi/`
- スロパチクエスト シティーハンター: `https://www.slopachi-quest.com/kisyubetsu/city-hunter/`
- ALL7 2014年1月導入カレンダー: `https://www.all7.jp/plans/index/2014/01`
- 娯楽産業 2013-10-25 大都技研2機種同時発表（吉宗 / CR鋼殻のレギオス）: `https://www.goraku-sangyo.com/%E5%A4%A7%E9%83%BD%E6%8A%80%E7%A0%94%E3%80%802%E6%A9%9F%E7%A8%AE%E5%90%8C%E6%99%82%E7%99%BA%E8%A1%A8-3/`
- アタリ7 激闘！西遊記: `https://www.atari7.com/slot/date1428988533.php`
