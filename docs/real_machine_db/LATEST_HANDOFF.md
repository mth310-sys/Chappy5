# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **754**
- latestMachineAddedByChronology: **パチスロBADBOYS**（岡崎産業）
- latestRecord: `docs/real_machine_db/machines/2013-08-05_pachislo-badboys.md`
- chronologicalFrontier: **2013-08-05**
- frontierLatestExactDateMachine: **パチスロBADBOYS**
- schema: **resetBehavior v0.7**
- status: **CLOSED_FOR_CURRENT_RESEARCH_2013-08-05_GROUP__NEXT_BOUNDARY_AUDIT_2013-08-06_TO_08-18__KNOWN_2013-08-19_GROUP**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、旧集約状態の `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-08-05_jackpot-dream.md` を再読。
- INDEXは19件地点の旧集約状態なので、README規定どおり最新HANDOFFと実レコードを正として継続。
- 開始時main正本は recordCount **753** / chronologicalFrontier **2013-08-05** / 08-05群OPEN。
- 前HANDOFF候補 **レインボースリーセブンS1-30（ベルコ）** を再監査したところ、K-Navi / 旧パチマガスロマガ系は2013-08-05 / 2013年8月とする一方、5号機クロニクルおよび別の5号機一覧は **2014-09** とする強い日付競合を確認。2013本線への誤混入を避け、**CONFLICT_RELEASE_DATE_2013-08-05_VS_2014-09__DEFER_TO_2014_QUEUE_FOR_FINAL_RESOLUTION** として今回は追加しない。
- 同じ前HANDOFF候補 **パチスロBADBOYS（岡崎産業）** は、2013-06-06当時グリーンべるとの「8/4納品開始予定」と機種DBの2013-08-05導入が整合。repo未登録だったため性能コア + resetBehavior v0.7を収集し、754件目として追加。
- 08-05同日群は既登録の **学園黙示録 HIGH SCHOOL OF THE DEAD / 緑ドン～キラメキ！炎のオーロラ伝説～ / ジャックポットドリーム / パチスロBADBOYS** と、遡及登録済み **美らん娘-30** の日付競合を再確認。レインボースリーセブンS1-30は上記理由で2014側保留。今回の横断監査範囲では他の具体日付き未登録機を確認できず、**CLOSED_FOR_CURRENT_RESEARCH**。
- 次に複数資料で具体日を確認できるアンカーは **2013-08-19群**。戦国乙女～剣戟に舞う白き剣聖～ / パチスロ クイーンズブレイド2 玉座を継ぐ者 / パチスロ ゼーガペイン / 魂斗羅3D を確認。次回は先に08-06～08-18境界を再監査する。

## 今回追加 — パチスロBADBOYS

### identity / 性能コア

- manufacturer: **岡崎産業**。
- releaseDate: **2013-08-05**。当時グリーンべるとは8/4納品開始予定、八通屋機種DBは8/5導入。
- 型式名: **BADBOYS 0A**。
- generation/system: **5号機 A+ART / 差枚数管理ART**。
- 機械割: **CONFLICT**。
  - 八通屋機種DB: **97.1 / 99.1 / 100.9 / 104.7 / 107.2 / 110.9%**。
  - 同保存攻略PDF: **97.0 / 99.0 / 100.8 / 104.6 / 107.1 / 110.9%**。
  - 当時保存新機種資料: **設定1約97%～設定6 114.2%** の別表記あり。平均化しない。
- ART「極楽モード」初当たり: **1/426 / 375 / 371 / 335 / 285 / 279**（保存攻略PDF単一系統）。
- PREMIUM BADBOYS BONUS: **1/8192.0（全設定共通）**。
- BADBOYS BONUS: **1/1024.0（全設定共通）**。
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**。
- ART「極楽モード」: **50 / 100 / 150G + α、純増約2.0枚/G（ボーナス込み）**。当時保存資料には1.75枚/G表記もありCONFLICT注記。
- BADBOYS BONUS: **約200枚** / PREMIUM BADBOYS BONUS: **約60枚**。
- 通常天井: **ART間最大2532枚投入**。P-WORLD目安 **約1689G**。
- coreStatus: **COMPLETE_CORE_WITH_PAYOUT_CONFLICT_BASE_UNVERIFIED**。

### resetBehavior v0.7

- 通常時に投入枚数管理の **通常A / 通常B / 天国A / 天国B**、ART直撃関連の **低確 / 高確 / 超高確** が存在することは確認。
- ただし **設定変更時に2532枚投入天井の進捗をリセット/再セットするか、通常モード・状態をどう再抽選するか**を直接規定した本機固有資料は、検索語・資料系統を変えて再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- **据え置き時**の投入差枚数・モード・状態保持契約: **UNVERIFIED_AFTER_RESEARCH**。
- **単純電源OFF→ONのみ**の投入差枚数・モード・状態・表示契約: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用の短縮天井/固定天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時モード振り分け / 状態振り分け / 朝一特定G以内当選率: **UNVERIFIED_AFTER_RESEARCH / NONE_CONFIRMED_AFTER_RESEARCH**。
- 本機固有のガックン・初期出目・液晶等による変更判別: **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- resetBehaviorQA: **MEDIUM_LOW__NORMAL_MODE_STATE_AND_CEILING_STRUCTURE_KNOWN__SETTING_CHANGE_CARRYOVER_POWER_CYCLE_CONTRACT_UNVERIFIED_AFTER_RESEARCH**。

## conflicts / chronology safeguards

### レインボースリーセブンS1-30

- K-Navi: **2013-08-05**導入、AT初当たり・機械割・純増約3.0枚/Gを掲載。
- 旧パチマガスロマガ系: **2013年8月**表記。
- 5号機クロニクル: ベルコ2014年導入機種として **2014/9**。
- 別の5号機AT一覧も **2014/9**。
- 同一機種名・ベルコ・S1-30を指しており、単純な同名別型式とは現時点で確認できない。したがって **CONFLICT_RELEASE_DATE** とし、2013列へは追加せず2014-09到達時に公式/業界一次資料を再探索して最終解決する。

### パチスロBADBOYS

- 機械割は上記3系統で競合。平均化しない。
- 純増はグリーンべると / P-WORLD / 八通屋が **約2.0枚/G（ボーナス込み）** で一致する一方、当時保存新機種資料に **1.75枚/G** 表記あり。主値は複数系統一致の約2.0枚/Gとし競合注記を保持。
- 一部後年タイアップ一覧の「2013年7月」表記は、当時8/4納品予定 + 8/5導入DBと競合するため時系列本線には採用しない。

## 境界監査 / 同日群

- 2013-08-05登録済み: **学園黙示録 HIGH SCHOOL OF THE DEAD / 緑ドン～キラメキ！炎のオーロラ伝説～ / ジャックポットドリーム / パチスロBADBOYS**。
- **美らん娘-30** は既に遡及登録済みで、07-29 / 08-05 / 8/4納品予定のCONFLICTを既存レコード側で保持。
- **レインボースリーセブンS1-30** は2013-08-05 vs 2014-09の強いCONFLICTにつき2014キューへ保留。
- 08-05群は今回の監査範囲で **CLOSED_FOR_CURRENT_RESEARCH**。
- 次の既知具体日: **2013-08-19**。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順。
- 今回は時系列本線と08-05同日監査を優先し、QAカーソルは進めていない。

## 次回再開地点

1. **recordCount 754 / chronologicalFrontier 2013-08-05 / 08-05群CLOSED_FOR_CURRENT_RESEARCH** から開始。
2. **2013-08-06～08-18境界**を当時新台一覧・メーカー/業界一次資料・解析DBで再監査し、具体日付き未登録機があれば先に処理。
3. 境界に漏れがなければ **2013-08-19「戦国乙女～剣戟に舞う白き剣聖～」（オリンピア）** を最初の既知候補として、repo既登録確認 → 性能コア + resetBehavior v0.7収集。
4. 同日候補として **パチスロ クイーンズブレイド2 玉座を継ぐ者（JPS） / パチスロ ゼーガペイン（山佐） / 魂斗羅3D（KPE）** を確認済み。全メーカー横断監査後に08-19群をCLOSED判定する。
5. **レインボースリーセブンS1-30** は2014-09到達時に `CONFLICT_RELEASE_DATE_2013-08-05_VS_2014-09` を再解決する。2013本線へ勝手に戻さない。
6. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順から継続。

## 主要出典 — 取得日 2026-09-06

### パチスロBADBOYS

- グリーンべると / P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/5890/greenbelt`
- P-WORLD機種DB: `https://www.p-world.co.jp/machine/database/7116`
- 八通屋機種DB: `https://www.8tw.com.tw/ec99/rwd1540/product.asp?prodid=S0147`
- 八通屋保存攻略PDF: `https://www.8tw.com.tw/rwd1540/store/F2/S0147%20%E6%90%9E%E6%80%AA%E5%B0%91%E5%B9%B4BAD%20BOYS%E4%B8%AD%E6%96%87%E7%89%88%E6%94%BB%E7%95%A5.compressed.pdf`
- 検定通過確認済み機種一覧: `https://p-media.info/%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%A2%BA%E8%AA%8D%E6%B8%88%E3%81%BF%E6%A9%9F%E7%A8%AE%E4%B8%80%E8%A6%A7%E3%80%80%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD/`
- 当時保存新機種資料: `https://happylibus.com/doc/987774/%E9%96%B2%E8%A6%A7%E3%81%99%E3%82%8B`

### レインボースリーセブンS1-30 日付競合

- K-Navi: `https://p-kn.com/slot/1921/`
- 5号機クロニクル ベルコ一覧: `https://5goki.com/bellco`
- 5号機AT一覧: `https://pachisuro100.com/at/`

### 次候補 / 2013-08-19群

- 戦国乙女～剣戟に舞う白き剣聖～ HAZUSE: `https://hazuse.com/machine/pachislot/SX0049/genre/209/`
- 戦国乙女 パチビー: `https://www.pachibee.jp/movies/index/9688`
- クイーンズブレイド2 K-Navi: `https://p-kn.com/slot/1893/`
- 魂斗羅3D K-Navi: `https://p-kn.com/slot/1884/`
- ゼーガペイン 当時グリーンべると: `https://news.p-world.co.jp/articles/5896/greenbelt`
