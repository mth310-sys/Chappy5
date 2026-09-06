# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **757**
- latestMachineAddedByChronology: **パチスロ ゼーガペイン**（山佐）
- latestRecord: `docs/real_machine_db/machines/2013-08-19_zegapain.md`
- chronologicalFrontier: **2013-08-19**
- frontierLatestExactDateMachine: **パチスロ ゼーガペイン**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-08-19_GROUP__NEXT_CONTRA3D__AUDIT_BEFORE_CLOSE**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、旧集約状態の `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-08-19_queens-blade-2-gyokuza-wo-tsugu-mono.md` を再読。
- INDEXは19件時点の旧集約状態のため、README規定どおり、より新しい **LATEST_HANDOFF + 実レコード** を正として継続。
- 開始時main正本: recordCount **756** / chronologicalFrontier **2013-08-19** / 08-19群OPEN。
- 同日未処理先頭 **パチスロ ゼーガペイン** はrepo未登録を確認し、性能コア + resetBehavior v0.7を757件目として追加。

## 今回追加 — パチスロ ゼーガペイン

### identity / 性能コア

- manufacturer: **山佐**。
- releaseDate: **2013-08-19**。K-Navi / HAZUSE / パチビー / 当時業界資料で照合。
- generation/system: **5号機 / AT + 擬似ボーナス / AT集中モード**。
- 型式名: **パチスロゼーガペインFF**。
- 検定番号: **3S0297**。
- AT「ゼーガラッシュ」: **1セット30G+α / 純増約2.7枚/G**。
- 擬似ボーナス「リザレクションチャンス」: **30G / 平均約100枚**。
- baseGamesPer50: **約30～31G/50枚**（当時記事30G/千円、後年解析31G/1000円のレンジ保持）。
- 天井: **擬似ボーナス＆AT間1280G**。
- 天井恩恵: **リザレクションチャンス + 輪廻死闘（80%ループ濃厚） + ゼーガラッシュ + セブンインパクト**。

### performance conflicts

- 機械割は2系列を平均せずCONFLICT:
  - HAZUSE後年更新値: **96.5 / 98.2 / 101.4 / 104.2 / 106.9 / 110.5%**。
  - 当時スペック掲載系: **96.5 / 98.3 / 101.5 / 104.3 / 107.1 / 111.1%**。
- 擬似ボーナス/AT確率にも大きな2系列差がありCONFLICT:
  - HAZUSE: 擬似ボーナス **1/224.1 → 1/199.8**、AT **1/185.8 → 1/121.2**。
  - 当時掲載系: 擬似ボーナス **1/289.0 → 1/244.0**、AT **1/637.2 → 1/430.8**。
- 定義差または解析更新差の可能性があるため補正・平均化せず双方をレコードへ保存。

### resetBehavior v0.7

- 2013年当時の天井ハイエナDBで本機は **「宵越し×」** と掲載。設定変更を挟んだ前日天井進捗を利用できない機種として扱われていたため、`gameCounterReset.settingChange` は **RESET_SUPPORTED_INDIRECT_CONTEMPORARY_DB** とした。
- ただし「宵越し×」を純据え置きや単純電源OFF→ONの内部契約と同一視しない。
- 設定変更時のモード/状態/液晶ステージ、純据え置き、単純電源OFF→ON、ガックン/初期出目/ランプ等について、機種名・型式名・山佐と `設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 電断 / 天井 / モード / ガックン` を組み替え、当時/後年資料を横断したが直接仕様を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用の固定短縮天井・公開された朝一専用恩恵/数値: **NONE_CONFIRMED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- 2022年「ゼーガペイン2」と2026年「スマスロゼーガペインETR」のリセット仕様は初代へ混入させない。

## 境界監査 / 同日群

- 2013-08-19登録済み:
  1. **戦国乙女～剣戟に舞う白き剣聖～**
  2. **パチスロ クイーンズブレイド2 玉座を継ぐ者**
  3. **パチスロ ゼーガペイン**
- 同日未処理既知候補:
  1. **魂斗羅3D**（KPE）
- 08-19群は **OPEN**。魂斗羅3D処理と全メーカー横断監査後にCLOSED判定する。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- `空手バカ一代` 自体は既にresetBehaviorを保持しているため重複更新しない。
- 新規収集キューを優先し、既存性能値の無駄な再収集はしない。

## 次回再開地点

1. **recordCount 757 / chronologicalFrontier 2013-08-19 / 08-19群OPEN** から開始。
2. 最優先: **魂斗羅3D（KPE）**。repo既登録確認 → 性能コア + resetBehavior v0.7。
3. 2013-08-19同日をメーカー/導入カレンダー/当時業界資料で横断再監査。
4. 他に未登録がなければ08-19群をCLOSEDし、次の具体導入日境界へ前進。
5. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順から、最初のresetBehavior欠損機を確定して補完。

## 主要出典 — 取得日 2026-09-06

### パチスロ ゼーガペイン

- HAZUSE: `https://hazuse.com/machine/pachislot/3S0297/`
- K-Navi: `https://p-kn.com/slot/1883/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7118`
- グリーンべると / P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/5896/greenbelt`
- パチスロ解析DB: `https://pachislo-data.com/yamasa/zegapain`
- スロスター当時記事: `https://ameblo.jp/slostar/entry-11549730712.html`
- 天井ハイエナ生活 当時一覧: `https://macerate.seesaa.net/article/372758539.html`

### 2013-08-19次候補

- 魂斗羅3D K-Navi: `https://p-kn.com/slot/1884/`

## commits

- 757th record add: `1b07f3cabf8f8dc2aeb83d4526baa5ee3e574ab7` (`db: add Zegapain with resetBehavior v0.7`)
- handoff update: current run (`db: advance relay handoff after Zegapain`)
