# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **933**
- latestRecordAdded: **パチスロ IS〈インフィニット・ストラトス〉**（SANKYO）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-11-02_is-infinite-stratos.md`
- chronologicalFrontier: **2015-11-02**
- frontierLatestMachine: **パチスロ IS〈インフィニット・ストラトス〉**
- schema: **resetBehavior v0.7**
- status: **2015-11-02_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.932 `2015-11-02_majestic-prince.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本 recordCount **932** / 2015-11-02群OPEN。
- 指定された次未処理 **パチスロ IS〈インフィニット・ストラトス〉** をNo.933として追加。

## No.933 — パチスロ IS〈インフィニット・ストラトス〉
- record: `docs/real_machine_db/machines/2015-11-02_is-infinite-stratos.md`
- manufacturer: **SANKYO**
- releaseDate: **2015-11-02**
- formalModelName: **パチスロ IS<インフィニット・ストラトス>**
- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 A+ART / ゲーム数解除+自力CZ / G数上乗せ型ART**

### performanceCore
- 機械割: **96.8 / 99.1 / 100.9 / 103.7 / 106.5 / 112.4%**。
- ART初当たり: **1/374 / 370 / 366 / 325 / 319 / 309**。
- ボーナス: **1/348 / 338 / 327 / 312 / 302 / 285**。
- 50枚ベース: **約32G**。
- ART純増: **約1.5枚/G**。SANKYO公式はボーナス込み約2.0枚/Gと説明するため定義分離。
- ヒロインボーナス: **純増168枚**。
- SUPER STREAM: **最低40G+α**。
- 通常最大天井: **ボーナス&ART間999G**。

### resetBehavior v0.7
- 設定変更: **天井RESET、内部モード再抽選、IS学園開始**。
- 据え置き/純電源OFF→ON: **天井・内部モード引継ぎ**。
- 純電断でヒロインメーター表示は0になるが、内部ptは引継ぎ。したがって朝一0表示だけでは変更判別不可。
- 設定変更時ART天井振り分け: **222G 1% / 333G 66.6～67% / 555G 1% / 999G 31～31.3%**。333G選択が約2/3で明確な朝一恩恵。
- 設定変更専用の内部モード全振り分け、低確/高確等の初期状態振り分けは再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有ガックン契約: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### quality / conflicts
- リセット天井333G **66.6% vs 67%**、999G **31.3% vs 31%** は丸め差として範囲保持。
- ART単体約1.5枚/G vs SANKYO公式ボーナス込み約2.0枚/Gは定義差でCONFLICTにしない。
- 導入直後に公表値を大きく下回る出玉/ベース実績が多数報告されたが原因未確定。本DB性能コアcanonicalを実績異常値へ置換しない。

## 2015-11-02群 — OPEN
処理済み:
1. パチスロ龍が如く OF THE END — No.928
2. ぱちスロAKB48 バラの儀式 — No.929
3. パチスロ ガールズ＆パンツァー — No.930
4. ハイスクールD×D — No.931
5. 銀河機攻隊 マジェスティックプリンス — No.932
6. パチスロ IS〈インフィニット・ストラトス〉 — No.933

未処理の強候補（K-Navi 2015年11月カレンダーで11/02全国一斉導入開始として確認）:
1. **プレミアムビンゴ — ベルコ**
2. **戦国パチスロ 花の慶次～戦極めし傾奇者の宴～ — EXCITE**

注意:
- プレミアムビンゴはK-Naviカレンダー/機種ページが **2015-11-02**。一方、ベルコの2015-08-06発表会記事では **11月16日導入予定**。予定/全国実導入の差か資料更新差かを次回再探索し、平均せず `CONFLICT` 判定する。
- 11/02群はまだCLOSEDにしない。
- 検定告示 / 発表 / 納品 / 地域先行 / 全国導入を分離する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2005-11_demashita-hakushon-daimaou.md**
- retroQaNextInspection: **2005-12_nobunaga-no-yabou-tenka-sousei-r.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE / 本線優先のため今回カーソル変更なし**

## 次回再開地点
1. **recordCount 933 / chronologicalFrontier 2015-11-02 / 11/02群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.933を再取得。
3. 本線: 次の未処理 **プレミアムビンゴ（ベルコ）** を性能コア + resetBehavior v0.7で登録。導入日は11/02と11/16予定の資料競合を再探索して定義分離。
4. その後 **戦国パチスロ 花の慶次～戦極めし傾奇者の宴～（EXCITE）** を処理。
5. 11/02群を全メーカー再監査し、漏れがなければCLOSED判定。その後11/03～11/08境界を監査し、次の強アンカー **2015-11-09 パチスロヤッターマン（三洋物産）** へ進む。
6. 遡及QA次候補は `2005-12_nobunaga-no-yabou-tenka-sousei-r.md`。本線収集を優先。
7. 欠損は表記揺れ・型式・メーカー・設定変更/据え置き/電源OFF ON/天井/モード/ガックン等へ検索語を変更し、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみUNVERIFIED。
8. 競合は平均せずCONFLICT/定義差として双方保存。
9. 全変更後、mainから新規レコード・LATEST_HANDOFFを再取得して保存検証する。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成しない。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- 実績異常/噂を公表性能や内部解析確定値へ昇格させない。

## 主要出典 — 取得日 2026-09-08
### No.933 パチスロ IS〈インフィニット・ストラトス〉
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/621/
- K-Navi機種ページ: https://p-kn.com/slot/2350/
- K-Navi 2015年11月カレンダー: https://p-kn.com/calendar/201511/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/38/a.php
- P-WORLD: https://www.p-world.co.jp/machine/database/7847
- ちょんぼりすた: https://chonborista.com/slot/sankyo-slot/11892/
- pachislo-data: https://pachislo-data.com/sankyo/20505
- すろぱちくえすと朝一: https://www.slopachi-quest.com/article/is-reset/
- パチナビ: https://pachinavi.net/machines/infinite-stratos/
- P-Summaスペック: https://psumma.jp/trend/15454/
- P-Summa当時異常報告まとめ: https://psumma.jp/pachislo/17191/

### 11/02次候補監査
- K-Navi 2015年11月カレンダー: https://p-kn.com/calendar/201511/
- K-Navi プレミアムビンゴ: https://p-kn.com/slot/2329/
- K-Navi ベルコ発表会記事: https://p-kn.com/topics/exhibition/1385/

## confidence
- No.933 exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE
- No.933 officialIdentity: OFFICIAL
- No.933 performanceCore: ANALYSIS_HIGH_MULTI_SOURCE_WITH_OFFICIAL_HIT_RATES
- No.933 settingChangeGameCounterReset: ANALYSIS_HIGH_DIRECT_COMPARISON
- No.933 resetCeilingDistribution: ANALYSIS_HIGH_MULTI_SOURCE
- No.933 purePowerCycleCeilingMode: ANALYSIS_HIGH_DIRECT_COMPARISON
- No.933 heroMeterPurePowerCycleBehavior: ANALYSIS_HIGH_DIRECT_COMPARISON
- No.933 resetModeDistribution: UNVERIFIED_AFTER_RESEARCH
- No.933 resetStateDistribution: UNVERIFIED_AFTER_RESEARCH
