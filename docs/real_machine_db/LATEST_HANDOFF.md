# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **755**
- latestMachineAddedByChronology: **戦国乙女～剣戟に舞う白き剣聖～**（オリンピア）
- latestRecord: `docs/real_machine_db/machines/2013-08-19_sengoku-otome-kengeni-mau-shiroki-kensei.md`
- chronologicalFrontier: **2013-08-19**
- frontierLatestExactDateMachine: **戦国乙女～剣戟に舞う白き剣聖～**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-08-19_GROUP__NEXT_QUEENS_BLADE2_THEN_ZEGAPAIN_THEN_CONTRA3D__AUDIT_BEFORE_CLOSE**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、旧集約状態の `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-08-05_pachislo-badboys.md` を再読。
- INDEXは19件地点の旧集約状態。README規定どおり、より新しい **LATEST_HANDOFF + 実レコード** を正として継続した。
- 開始時main正本: recordCount **754** / chronologicalFrontier **2013-08-05** / 08-05群CLOSED_FOR_CURRENT_RESEARCH。
- 2013-08-06～08-18境界を「新台 / 導入 / 納品 / 8月12日 / 8月18日」等の表記で当時記事・解析DB・導入日DBを再探索。今回の監査範囲では、08-05より後・08-19より前に具体日で固定すべき未登録5号機は検出せず、次の具体日アンカー **2013-08-19** へ進行。
- 08-19群の先頭既知候補 **戦国乙女～剣戟に舞う白き剣聖～** はrepo未登録を確認し、性能コア + resetBehavior v0.7を755件目として追加。

## 今回追加 — 戦国乙女～剣戟に舞う白き剣聖～

### identity / 性能コア

- manufacturer: **オリンピア**。
- releaseDate: **2013-08-19**。K-Navi / HAZUSEが一致。当時資料の8/18納品予定とも整合。
- 型式名: **戦国乙女 剣戟に舞う白き剣聖A1** / 検定番号 **3S0295**。
- generation/system: **5号機 / 擬似ボーナス + ART**。
- 機械割: **97.1 / 98.5 / 100.3 / 104.7 / 108.7 / 113.2%**。
- ART「強カワRUSH」初当たり: **1/667.4 / 1/647.7 / 1/605.9 / 1/522.5 / 1/459.7 / 1/397.7**。
- 純ボーナス合成: **1/244.4 / 1/240.1 / 1/234.6 / 1/219.8 / 1/210.0 / 1/194.3**。
- ボーナス+ART初当たり合成: **1/178.9 / 1/175.2 / 1/169.1 / 1/154.7 / 1/144.1 / 1/130.5**。
- baseGamesPer50: **約31G/50枚**（2013年当時資料、単一系統のため ANALYSIS_SINGLE_PERIOD）。
- ART: **1セット50G+α / 純増約2.2枚/G**。
- 基本獲得: 百花繚乱BONUS **約203枚** / 乙女BONUS **平均約146枚** / 希望の光ゾーン **平均約48枚**。
- 通常モード: **通常A / 通常B / 通常C / 天国A / 天国B**。天国A/Bは **99G以内**。
- 最大天井表現は **1056G / 1059G / 1060G** が資料間で存在。前兆・到達/消化カウント差を含む可能性があるため平均せずCONFLICT保持。

### resetBehavior v0.7

- **設定変更で天井までのゲーム数と内部モードをリセット**することを本機固有解析で確認。
- 設定変更後モード振り分け:
  - 設定1～3: **通常A 79.50% / 天国A 20.00% / 天国B 0.50%**。
  - 設定4～6: **通常A 74.50% / 天国A 25.00% / 天国B 0.50%**。
- よって設定変更後の天国A/B合計は **20.5%（設定1～3） / 25.5%（設定4～6）**。天国なら99G以内。固定短縮天井ではなく、リセット専用モード再抽選による朝一優遇として保存。
- 設定変更時の内部状態専用振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 純据え置き時の天井G数 / モード / 状態の直接保持契約: **UNVERIFIED_AFTER_RESEARCH**。
- 単純電源OFF→ONでは **液晶ステージが変化する**ことを確認。ただし内部G数 / モード / 状態のKEEP/RESET直接契約は **UNVERIFIED_AFTER_RESEARCH**。
- したがって朝一ステージ単独では変更判別材料として弱い。本機固有ガックン / 初期出目 / ランプ等は再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- resetPenalty: **NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts / safeguards

- 天井最大値表現: HAZUSE **1056G** / K-Navi系モード表 **1059G** / pacnk **1060G消化**。平均化しない。
- K-Naviトップの「ボーナス合算」1/178.9～1/130.5は、詳細解析上の **ボーナス+ART初当たり合成** に相当。パチマガスロマガの純ボーナス合成 **1/244.4～1/194.3** と定義を分離。
- 後継機 **西国参戦編（2014-06-02）** の周期・純増2.0枚/G・リセット情報は初代へ混入させない。
- **レインボースリーセブンS1-30** の `CONFLICT_RELEASE_DATE_2013-08-05_VS_2014-09` は継続。2014-09到達時に再解決し、2013列へ勝手に戻さない。

## 境界監査 / 同日群

- 2013-08-06～08-18: 今回の再探索では具体日付き未登録機を検出せず、**CLOSED_FOR_CURRENT_RESEARCH**。
- 2013-08-19登録済み: **戦国乙女～剣戟に舞う白き剣聖～**。
- 同日未処理既知候補:
  1. **パチスロ クイーンズブレイド2 玉座を継ぐ者**（JPS）
  2. **パチスロ ゼーガペイン**（山佐）
  3. **魂斗羅3D**（KPE）
- 08-19群は **OPEN**。上記3機種処理と全メーカー横断監査後にCLOSED判定する。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順。
- 今回は時系列本線を優先し、QAカーソルは進めていない。

## 次回再開地点

1. **recordCount 755 / chronologicalFrontier 2013-08-19 / 08-19群OPEN** から開始。
2. 最優先: **パチスロ クイーンズブレイド2 玉座を継ぐ者（JPS）**。repo既登録確認 → 性能コア + resetBehavior v0.7。
3. 続いて **パチスロ ゼーガペイン（山佐）** → **魂斗羅3D（KPE）**。
4. 08-19同日をメーカー横断再監査し、他に未登録がなければ群をCLOSED。
5. その後、次の導入日境界へ時系列前進。
6. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順から継続。

## 主要出典 — 取得日 2026-09-06

### 戦国乙女～剣戟に舞う白き剣聖～

- K-Navi 機種ページ: `https://p-kn.com/slot/1889/`
- K-Navi モード移行率: `https://p-kn.com/slot/1889/45678/`
- パチマガスロマガ ボーナス確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/110/h-1.php`
- HAZUSE: `https://hazuse.com/machine/pachislot/SX0049/`
- HAZUSE 基本スペック: `https://hazuse.com/machine/pachislot/SX0049/genre/201/`
- pacnk: `https://pacnk.com/slot/2013/sengokuotome/top.php`
- 2013年当時新機種スペック: `https://ameblo.jp/slostar/entry-11554947959.html`
- パチナビ後年整理: `https://pachinavi.net/machines/sengoku-otome-1/`

### 2013-08-19同日候補

- ゼーガペイン K-Navi: `https://p-kn.com/slot/1883/`
- 魂斗羅3D K-Navi: `https://p-kn.com/slot/1884/`

## commits

- 755th record add: `feb1aa75fe474f7d65dff4f107fbab35bce58c99`
