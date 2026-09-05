# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **736**
- latestMachineAdded: **キャッツ・アイ－コレクション奪還作戦**（オリンピア）
- latestRecord: `docs/real_machine_db/machines/2013-05-20_cats-eye-collection-dakkan-sakusen.md`
- chronologicalFrontier: **2013-05-20**
- frontierLatestExactDateMachine: **キャッツ・アイ－コレクション奪還作戦**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-05-20_GROUP__NEXT_CAPTAIN_PULSAR_THEN_PRISM_NANA**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-05-07_oni-no-shiro.md` を確認。
- INDEXは19件地点の旧集約状態なので、README規定どおり最新HANDOFFと実レコードを正本として優先。
- 開始時main正本は recordCount **735** / chronologicalFrontier **2013-05-07** / 05-07群CLOSED。
- 05-08～05-19境界を別系統資料で再監査した上で、次の具体導入日アンカー **2013-05-20** へ進行。
- repo上でキャッツ・アイ－コレクション奪還作戦が未登録であることを確認し、736件目として追加。

## 今回追加 — キャッツ・アイ－コレクション奪還作戦

### identity / 性能コア

- manufacturer: **オリンピア**。
- releaseDate: **2013-05-20**。K-Navi、HAZUSE、パチビー、パチスロ解析ガイドで一致。
- formalModelName: **キャッツアイ-コレクション奪還作戦A2**。
- inspectionNumber: **2S1464**。
- systemType: **5号機 / ART**。
- ART「キャッツRUSH」初当たり: **1/282.2 / 268.0 / 257.0 / 219.0 / 186.0 / 159.2**。
- 機械割: **97.4 / 99.0 / 100.3 / 105.2 / 110.2 / 115.1%**。
- baseGamesPer50: **約32G/50枚**。現状は単一二次資料で、追加照合待ち。
- ART「キャッツRUSH」: **50～250G+α / 純増約2.7枚/G**。
- 擬似ボーナス「キャッツボーナス」: **20G固定 / 約54枚**。
- スーパーキャッツRUSH: **20G**、スーパーキャッツボーナス抽選 **1/9.9**。
- 通常時主要モード: **通常A / 通常B / 天国A / 天国B / 天国C / 超天国**。
- 天井は資料定義差を保持:
  - P-WORLD: 通常A/B **999G**、天国A/B/C・超天国 **100G**。
  - 当時天井整理: 通常A **最大990G** / 通常B **999G** / 天国系 **100G**。
  - `CONFLICT_DEFINITION_990_VS_999`。

### resetBehavior v0.7

- パチスロ立ち回り講座の機種別天井資料で、**設定変更後は天井までのゲーム数をクリア**することを直接確認。
- K-Navi機種ページに本機固有の **「モード移行率(設定変更時)」** 解析項目が存在し、設定変更時にモード移行/再抽選が行われる仕様自体は直接確認。
- ただし現存検索インデックスから具体的な設定別モード振り分け表を安全に回収できなかったため、数値は **`UNVERIFIED_AFTER_RESEARCH`**。
- 一律のリセット短縮天井は直接資料を確認できず **`NONE_CONFIRMED_AFTER_RESEARCH`**。
- 古い天井狙い整理には「宵越し×」表記があるが、純据え置き時の全内部契約を列挙した直接資料ではないため、据え置きのゲーム数/モード/状態完全契約は **`UNVERIFIED_AFTER_RESEARCH`**。
- 設定変更なしの単純電源OFF→ONのゲーム数/モード/内部状態/表示契約も再探索後 **`UNVERIFIED_AFTER_RESEARCH`**。
- ガックン・初期出目・液晶等の本機固有変更判別は再探索後 **`UNVERIFIED_AFTER_RESEARCH`**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- resetQaStatus: **RESEARCHED__SETTING_CHANGE_CEILING_RESET_CONFIRMED__MODE_RESELECT_EXISTENCE_CONFIRMED__CARRYOVER_POWER_CYCLE_UNVERIFIED**。

## 2013-05-08～05-19境界監査

- 後年の撤去期限資料で **BADBOYS / 美らん娘-30 = 2013-05-13** という日付を一度検出。
- ただし当時グリーンべると/P-WORLD業界記事では、両機は2013-06-04発表、**2013-08-04納品開始予定**。
- よって後年資料の2013-05-13は **検定通過日** と判断し、ホール導入日の時系列キーへ使用しない。
- 05-08～05-19について、今回の別系統監査ではこれ以外に具体導入日を固定できる未登録5号機を確認できず、**CLOSED_FOR_CURRENT_RESEARCH**。

## 2013-05-20同日群

- 登録済み: **キャッツ・アイ－コレクション奪還作戦**。
- 次候補として専用資料で **キャプテンパルサー**（山佐）、**まじかるすいーとプリズム・ナナ**（DAXEL）の2013-05-20導入を確認済み。
- 05-20群は **OPEN**。次リレーで同日群を継続し、全メーカー横断監査後にCLOSED判定する。

## 遡及resetBehavior QA 進捗

- 本線と別のQA再開地点は引き続き `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`。
- 本線収集を優先し、既存性能値の無駄な再調査はしていない。

## 次回再開地点

1. **recordCount 736 / chronologicalFrontier 2013-05-20 / 05-20群OPEN** から開始。
2. 最優先は **2013-05-20「キャプテンパルサー」**（山佐）。repo重複確認 → 性能コア + resetBehavior v0.7を本調査 → 保存。
3. 続いて **2013-05-20「まじかるすいーとプリズム・ナナ」**（DAXEL）を処理。
4. その後、05-20同日群をHAZUSE/K-Navi/パチビー/メーカー一覧/業界カレンダーで横断監査し、漏れがなければCLOSED。
5. キャッツ・アイの設定変更時モード数値表、純据え置き完全契約、純電断、ガックン等は後続QAで直接資料が見つかった場合のみ補完し、設定変更仕様の反対推定で埋めない。

## 主要出典 — 取得日 2026-09-06

### キャッツ・アイ－コレクション奪還作戦

- K-Navi: `https://p-kn.com/slot/1843/`
- HAZUSE: `https://hazuse.com/machine/pachislot/2S1464/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7056`
- パチビー: `https://www.pachibee.jp/movies/index/9419`
- パチマガスロマガ 基本情報: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/109/a.php`
- パチマガスロマガ ART突入フロー: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/109/l.php`
- パチスロ解析ガイド: `https://pachislot-guide.net/2013/catseye-collection/`
- パチスロ立ち回り講座 天井一覧: `https://crankyseven.com/sp/tenjo-5ka.htm`
- 天井ハイエナ生活 当時整理: `https://macerate.seesaa.net/article/226196713.html`
- 実機販売スペック整理: `https://slot-kakaku.com/%E3%82%AD%E3%83%A3%E3%83%83%E3%83%84%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%AC%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%AE%9F%E6%A9%9F/`

### 境界監査

- 後年撤去期限記事（2013-05-13は検定通過日として扱う）: `https://pachiseven.jp/articles/detail/8842`
- 当時グリーンべると/P-WORLD業界記事（BADBOYS・美らん娘-30、2013-08-04納品開始予定）: `https://news.p-world.co.jp/articles/5890/greenbelt`

### 次候補

- キャプテンパルサー K-Navi: `https://p-kn.com/slot/1844/`
- まじかるすいーとプリズム・ナナ K-Navi: `https://p-kn.com/slot/1847/`
