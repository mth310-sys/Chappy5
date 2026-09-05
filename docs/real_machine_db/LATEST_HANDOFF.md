# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **733**
- latestMachineAdded: **パチスロ 創聖のアクエリオンII**（SANKYO）
- latestRecord: `docs/real_machine_db/machines/2013-05-07_sousei-no-aquarion-2.md`
- chronologicalFrontier: **2013-05-07**
- frontierLatestExactDateMachine: **パチスロ 創聖のアクエリオンII**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-05-07_GROUP__NEXT_RESIDUAL_AUDIT**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-04-15_onihama-bakusou-gurentai-yuujou-banka.md` を確認。
- INDEXは19件地点の旧集約状態なので、README規定どおり最新HANDOFFと実レコードを正本として優先。
- 開始時main正本は recordCount **732** / chronologicalFrontier **2013-04-15** / 04-15群OPEN。
- 2013年4月の別カレンダーを再監査し、4/15の既登録3機（戦国無双2 / 戦国パチスロ 信長の野望‐天下創世‐ / 鬼浜爆走紅蓮隊～友情挽歌編～）より後の4月スロット新規導入を確認できなかったため、**04-15群をCLOSED**。
- 2013-04-16以降を監査し、次の具体日付き候補として2013-05-07群を確認。
- ALL7の5/7一覧には「キャッツ・アイ コレクション奪還作戦」も載るが、K-Navi / パチビー / HAZUSEの本機専用資料が導入開始を **2013-05-20** で一致させているため、5/7候補としては採用しない。
- 同一覧の「ゲゲゲの鬼太郎 地獄からの使者」はパチンコ機なので本DB対象外。
- **パチスロ 創聖のアクエリオンII** はK-Navi / HAZUSE / パチビーで **2013-05-07** 一致、repo未登録を確認し733件目として追加。

## 今回追加 — パチスロ 創聖のアクエリオンII

### identity / 性能コア

- manufacturer: **SANKYO**。
- releaseDate: **2013-05-07**。
- formalModelName: **パチスロ創聖のアクエリオンII G**。
- inspectionNumber: **2S1348**。
- systemType: **5号機 / ボーナス + ART**。
- ART初当たり: **1/399.0 / 349.8 / 340.8 / 308.3 / 291.2 / 230.3**（SANKYO公式 / P-WORLD）。
- ボーナス合算: **1/266 / 263 / 260 / 251 / 257 / 245**（SANKYO公式）。
- ボーナス+ART合算: SANKYO公式で **1/159 / 150 / 147 / 138 / 136 / 118**、P-WORLDの小数付き値とも整合。
- ART「創聖RUSH」: **1セット30～200G+α / 純増約1.5枚/G**。
- SBB約216枚 / BIG約210枚 / REG約48枚。
- 設定別機械割、50枚ベース、天井の具体的な複数条件/数値は、安全な直接表を今回固定できず `UNVERIFIED_AFTER_RESEARCH`。性能コアは推測補完せず `PARTIAL_CORE_RESET_RESEARCHED`。

### resetBehavior v0.7

- 設定変更/リセット/朝一/据え置き/電源OFF ON/天井/状態/ガックンを組み替え、公式・業界・当時解析・古いDB・回顧資料を再探索。
- 本機固有の設定変更時ゲーム数CLEAR/RETAIN、純据え置き、単純電源OFF→ON、状態/モード処理、変更判別、公開朝一数値を直接固定できる資料は今回確定できず、各項目を **UNVERIFIED_AFTER_RESEARCH** として保存。
- 一般的な5号機挙動からの推測はしていない。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- resetQaStatus: **RESEARCHED__NO_MACHINE_SPECIFIC_DIRECT_RESET_CONTRACT_FIXED_AFTER_MULTI_ROUTE_SEARCH**。

## 遡及resetBehavior QA 進捗

- 本線と別のQA再開地点は引き続き `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`。
- 「空手バカ一代」自体は既にv0.7 `resetBehavior`収集済みのため重複更新しない。
- 今回はその直後のtree実順で最初のresetBehavior欠損機を安全に一意確定できるところまで進まなかったため、QAカーソルを誤って前進させず維持。
- 既存COMPLETE_CORE/PARTIAL等の性能完了判定は変更していない。

## 次回再開地点

1. **recordCount 733 / chronologicalFrontier 2013-05-07 / 05-07群OPEN** から開始。
2. 2013-05-07同日群をメーカー別一覧・当時新台記事・別カレンダーで残存監査。創聖のアクエリオンII以外に対象スロットがあれば最古未登録を追加。
3. 5/7群に残存がなければ **05-07群をCLOSED** とし、5/8以降へ前進。キャッツ・アイは専用資料に従い **2013-05-20候補**として扱う。
4. 創聖のアクエリオンIIの未検証項目（設定別機械割、50枚ベース、天井複数契約、設定変更/電断処理）は検索語・資料系統を変えて再探索し、確定できれば既存PARTIALを補完。競合は平均せずCONFLICT。
5. 遡及QAは `2007-01_karate-baka-ichidai.md` の直後の実ファイル順を再取得し、最初の `resetBehavior` 欠損レコードを補完する。

## 主要出典 — 取得日 2026-09-06

### 境界監査

- ALL7 2013年4月一覧: `https://www.all7.jp/plans/index/2013/04`
- ALL7 2013年5月一覧: `https://www.all7.jp/plans/index/2013/05`
- キャッツ・アイ K-Navi（2013-05-20）: `https://p-kn.com/slot/1843/`
- キャッツ・アイ パチビー（2013-05-20）: `https://www.pachibee.jp/movies/index/9419`
- キャッツ・アイ HAZUSE（2013-05-20）: `https://hazuse.com/machine/pachislot/2S1464/`

### パチスロ 創聖のアクエリオンII

- SANKYOオンライン博物館（公式、導入年月、設定別ボーナス/ART確率、機種構造）: `https://www.sankyo-fever.jp/collection/547/`
- K-Navi（2013-05-07、ART 30～200G、約1.5枚/G）: `https://p-kn.com/slot/1840/`
- HAZUSE（型式名、検定番号、2013-05-07、ART/CZ/獲得枚数）: `https://hazuse.com/machine/pachislot/2S1348/`
- P-WORLD（設定別ボーナス/ART初当り、ART構造）: `https://www.p-world.co.jp/machine/database/7048`
- パチビー（2013-05-07、5号機ART、天井あり、約1.5枚/G）: `https://www.pachibee.jp/movies/index/9325`
- パチマガスロマガ（ART純増約1.5枚/G、SBB/BIG/REG獲得目安）: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/31/01.php`
- パチ＆スロ必勝本 本機解析ページ: `https://p.hisshobon.jp/machine/2199/1/40499`
