# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **735**
- latestMachineAdded: **鬼の城**（メーシー）
- latestRecord: `docs/real_machine_db/machines/2013-05-07_oni-no-shiro.md`
- chronologicalFrontier: **2013-05-07**
- frontierLatestExactDateMachine: **鬼の城**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2013-05-07_GROUP__NEXT_BOUNDARY_2013-05-08_TO_05-19_THEN_05-20_GROUP**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-05-07_ryuko-no-ken.md` を確認。
- INDEXは19件地点の旧集約状態なので、README規定どおり最新HANDOFFと実レコードを正本として優先。
- 開始時main正本は recordCount **734** / chronologicalFrontier **2013-05-07** / 05-07群OPEN / next **鬼の城**。
- repo検索で鬼の城が未登録であることを確認し、735件目として追加。

## 今回追加 — 鬼の城

### identity / 性能コア

- manufacturer: **メーシー**。
- releaseDate: **2013-05-07**。HAZUSE、K-Navi、パチビーで一致。ユニバーサル公式は発売月2013年5月。
- formalModelName: **鬼の城T**。
- inspectionNumber: **2S1145**。
- systemType: **5号機 / ART**。
- ART「殲鬼の刻」初当たり: **1/327.4 / 298.8 / 291.4 / 244.3 / 247.6 / 199.6**。
- baseGamesPer50: **約31.7G/50枚**。
- ART: 鬼狩RUSHで初期G数決定、赤7最低2回保証のため **最低60G**、純増 **約2.2枚/G**。
- 通常時主要モード: **通常A / 通常B / 天国**。天国は99G以内ART濃厚。
- 通常ART天井: ART終了後最大 **1299G**、最大40G前兆後ART。
- 機械割は軽微競合のため平均せず `CONFLICT_MINOR_SOURCE_DIFFERENCE`:
  - HAZUSE: **98.2 / 99.4 / 102.2 / 106.5 / 110.6 / 116.2%**
  - P-WORLD: **98.2 / 99.4 / 102.4 / 106.5 / 110.6 / 116.1%**

### resetBehavior v0.7

- HAZUSE、パチマガスロマガ、当時解析整理、公式/業界/機種DB、宵越し実戦資料を横断。
- 設定変更時は **専用の規定Gテーブルから再抽選**、通常モードも **設定変更専用振り分けで再抽選**。
- 設定変更時モード:
  - 設定1/3/5: 通常A **90.80%** / 通常B **9.20%** / 天国 **0%**
  - 設定2/4/6: 通常A **60.30%** / 通常B **9.20%** / 天国 **30.50%**
- 設定変更時規定Gの主要値:
  - 0～99G: **14.55%**（全設定）
  - 100～199G: **12.21%**（全設定）
  - 1000～1099 / 1100～1199 / 1200～1299G: 設定1～3 **0%**、設定4～6 **各3.01%**
- よって **設定変更後にART間1000Gを超えれば設定4以上**という公開朝一判別材料をHAZUSE/パチマガスロマガで確認。
- 宵越し天井到達の実戦・番組資料から据え置きG数が有効だった例は確認。ただし規定G・モード・鬼神界戦失敗回数・内部状態すべての純据え置き完全契約は直接資料不足のため `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更を伴わない単純電源OFF→ONのゲーム数/モード/内部状態/表示契約、ガックン・初期出目等の変更判別は検索語・資料系統変更後も `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- resetQaStatus: **RESEARCHED__DIRECT_NUMERIC_RESET_TABLES_FIXED__CARRYOVER_POWER_CYCLE_PARTIAL**。

## 2013-05-07同日群・境界監査

- HAZUSE/K-Naviの具体日資料で **パチスロ創聖のアクエリオンII / 龍虎の拳 / 鬼の城** の2013-05-07導入を確認し、いずれも登録済み。
- ALL7の5月一覧に混在する「ゲゲゲの鬼太郎 地獄からの使者」はCRパチンコ機であり本DB対象外。
- ALL7が5/7表記する「キャッツ・アイ コレクション奪還作戦」は専用HAZUSE/K-Navi資料で **2013-05-20** が一致するため5/7群へ入れない。
- 以上から **2013-05-07同日群をCLOSED**。
- 05-08～05-19について「2013年5月13日」「導入開始」「ホール導入」等も再検索したが、今回の探索では具体日を複数資料で固定できる未登録パチスロ機を確認できず。次回冒頭で別系統カレンダー/メーカー一覧を使って境界最終監査する。
- 次の既知具体日アンカーは **2013-05-20**。候補として専用資料で `キャッツ・アイ－コレクション奪還作戦`、`キャプテンパルサー`、`まじかるすいーとプリズム・ナナ` を確認済み。

## 遡及resetBehavior QA 進捗

- 本線と別のQA再開地点は引き続き `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`。
- 本線収集を優先し、既存性能値の無駄な再調査はしていない。

## 次回再開地点

1. **recordCount 735 / chronologicalFrontier 2013-05-07 / 05-07群CLOSED** から開始。
2. まず **2013-05-08～05-19境界を別系統の導入カレンダー・メーカー別一覧・HAZUSE/K-Navi/パチビーで最終監査**。具体日付き未登録5号機が見つかればそちらを時系列優先。
3. 境界に追加がなければ **2013-05-20「キャッツ・アイ－コレクション奪還作戦」**（オリンピア）を最優先でrepo重複確認→本調査→追加。
4. 同日既知候補として **キャプテンパルサー**（山佐）、**まじかるすいーとプリズム・ナナ**（DAXEL）を順次処理し、05-20同日群を全メーカー横断監査。
5. 鬼の城の純据え置き完全契約・純電断・ガックン等は後続QAで別の直接資料が見つかった場合のみ補完し、設定変更仕様の反対推定で埋めない。

## 主要出典 — 取得日 2026-09-06

### 鬼の城

- ユニバーサル公式（2013年5月、メーシー、ART、鬼狩RUSH）: `https://www.universal-777.com/product/slot/onino_shiro/`
- HAZUSE（型式、検定番号、2013-05-07、ART初当たり、31.7G/50枚、機械割、1299G天井、設定変更時規定G/モード数値）: `https://hazuse.com/machine/pachislot/2S1145/`
- P-WORLD（ART初当たり、機械割、ART最低60G級仕様、純増2.2枚/G）: `https://www.p-world.co.jp/machine/database/7039`
- K-Navi（2013-05-07、最低60G保証、純増2.2枚/G）: `https://p-kn.com/slot/1837/`
- K-Navi 展示会速報（2013-03-15、5月上旬導入予定）: `https://p-kn.com/topics/exhibition/1061/`
- パチビー（2013-05-07、5号機ART、純増約2.2枚/G）: `https://www.pachibee.jp/movies/index/9329`
- パチマガスロマガ（朝イチ/設定変更「リセット後1000G超は設定4以上」）: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/macy_slot/41/macy_slot_41.php`
- パチマガスロマガ ゲーム性解説（最低2回赤7、最低60G、純増2.2枚/G）: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/macy_slot/41/01.php`
- 当時スペック整理（約31.7G/千円、ART間1299G）: `https://ameblo.jp/slostar/entry-11486053077.html`
- 当時解析整理（設定変更時規定Gテーブル別系統）: `https://www.slopachi-quest.com/article/368560214-html/`
- 宵越し実戦例（据え置き側の補助証拠）: `https://moge-site.com/archives/5610`
- 後年番組紹介（鬼の城の宵越し天井到達例、補助証拠）: `https://www.videomarket.jp/title/041358/A041358050999H01`

### 境界 / 次候補

- ALL7 2013年5月一覧: `https://www.all7.jp/plans/index/2013/05`
- キャッツ・アイ HAZUSE: `https://hazuse.com/machine/pachislot/2S1407/`
- キャッツ・アイ K-Navi: `https://p-kn.com/slot/1845/`
- キャプテンパルサー K-Navi: `https://p-kn.com/slot/1844/`
- まじかるすいーとプリズム・ナナ K-Navi: `https://p-kn.com/slot/1847/`
