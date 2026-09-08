# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **976**
- latestRecordAdded: **ニューチバリヨ**（ネット / 25Φ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-04-18_new-chibariyo-25.md`
- chronologicalFrontier: **2016-04-18**
- frontierLatestMachine: **ニューチバリヨ**
- schema: **resetBehavior v0.7**
- status: **2016-04-18_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.975 `2016-04-18_new-chibariyo-30.md` を再取得してから作業。
- INDEXは19件時点の旧集約のため、README規定どおり **LATEST_HANDOFF + 実レコード + 最新main** を進捗正本として使用。
- 開始時点は recordCount 975 / chronologicalFrontier 2016-04-18 / 04-18群OPEN。
- 前回保留した25Φ「ニューチバリヨ」を、30Φ版から型式/検定番号を流用せず再探索。
- 鹿児島県公安委員会告示第20号（平成28年2月16日）まで到達し、25Φ型式 **ニューチバリヨ／NE**、検定番号 **5S1390** を公的資料で直接固定したためNo.976として独立登録。

## 2016-04-04群 — CLOSED_FOR_CURRENT_RESEARCH
登録済み:
- No.968 パチスロ 機動警察パトレイバー（北電子）
- No.969 キングパルサー～DOT PULSAR～（山佐）
- No.970 探偵歌劇 ミルキィホームズ TD 消えた7と奇跡の歌（DAXEL）

## 2016-04-11群 — CLOSED_FOR_CURRENT_RESEARCH
登録済み:
- No.971 プチマーメイド（北電子）
- No.972 パチスロ マブラヴ オルタネイティヴ トータル・イクリプス（SANKYO、4/11 vs 4/18 CONFLICT保持）

## 2016-04-18群 — OPEN
登録済み:
- No.973 スーパーストリートファイターIV パチスロエディション（エンターライズ）
- No.974 アステカ-太陽の紋章-（エレコ）
- No.975 ニューチバリヨ-30（ネット、30Φ）
- No.976 **ニューチバリヨ**（ネット、25Φ）
- No.972 トータル・イクリプスは4/18表記資料もあるが既登録のため重複登録しない。

### 04/18群 再監査で確認した未処理機
- **スーパーリノMAX**（山佐）を2016-04-18導入として複数資料で確認。GitHub既存レコード検索でも未登録。
- HAZUSEでは型式 **スーパーリノDX／EE**、検定番号 **5S0874**、2016-04-18導入を確認済み。
- モゲスロ2016年導入カレンダーでも04/18群にアステカ、トータル・イクリプス、ニューチバリヨ、スーパーストリートファイターIV、スーパーリノMAXを列挙。
- よって04/18群はまだCLOSEDにしない。
- 月次回顧一覧には **トリプルクラウンG-30**（清龍ゲームジャパン、2016年4月）も存在するため、スーパーリノMAX処理後に具体導入日を別資料で固定できるか監査する。月だけを根拠に04/18へ自動配置しない。

## No.976 — ニューチバリヨ（25Φ）
- record: `docs/real_machine_db/machines/2016-04-18_new-chibariyo-25.md`
- manufacturer: **ネット**
- releaseDate canonical: **2016-04-18**
- formalModelName: **ニューチバリヨ／NE**
- certificationNumber: **5S1390**
- generation/system: **5号機 / AT / 枚数管理型擬似ボーナス / 25Φ完全告知**

### identity / variant
- ネット公式プレスは25Φ「ニューチバリヨ」と30Φ「ニューチバリヨ-30」を同時発売と明記。
- 鹿児島県公報の公安委員会告示で25Φ **NE / 5S1390**、30Φ **ND-30 / 5S1398** が同じ表に別型式として掲載されるため、独立variantとして登録。
- Re.designとP-WORLDも25Φを個別掲載。

### release date
- ネット公式: 2016年4月中旬全国導入予定。
- Re.design: 最短納期2016-04-17。
- パチ7、ちょんぼりすた、pachislo-data: **2016-04-18**。
- HAZUSE/アタリ7系にはシリーズ側で **2016-04-11** 表記あり。
- canonicalは4/18、`CONFLICT_RELEASE_DATE_2016_04_18_MULTI_SOURCE_VS_2016_04_11_PERIOD_DATABASE` を保持。

### performanceCore
- 機械割: **96.8 / 98.1 / 99.5 / 101.0 / 103.1 / 105.5%**。
- 擬似ボーナス初当たり: **1/375 / 353 / 340 / 271 / 249 / 213**。
- 連チャン込みBIG: **1/175 / 168 / 164 / 157 / 149 / 140**。
- REG: **1/345 / 326 / 317 / 302 / 286 / 272**。
- 合算: **1/116 / 111 / 108 / 103 / 98 / 93**。
- ベース: **約45.7G/50枚**。
- 純増: **約3.0枚/G**。
- チバリヨBIG約200枚 / BIG約100枚 / REG約50枚。
- 通常A/B最大天井: **1280G**。
- 25Φ個別のRe.design/P-WORLDで性能系列を直接照合したため、30Φからの単純転記ではない。

### resetBehavior v0.7
- 設定変更: **天井RESET / モードRESELECT**。
- 純電源OFF→ON: **天井CARRYOVER / モードCARRYOVER**。
- 据え置き主要契約: **天井進捗・モードCARRYOVER**。
- 設定変更時モード振り分け:
  - 設定1: 通常A58.6 / 通常B24.2 / 天国準備10.9 / 引き戻し6.3%
  - 設定2: 57.8 / 25.0 / 10.9 / 6.3%
  - 設定3: 56.3 / 26.6 / 10.9 / 6.3%
  - 設定4: 55.5 / 27.3 / 10.9 / 6.3%
  - 設定5: 55.5 / 27.3 / 10.9 / 6.3%
  - 設定6: 50.0 / 32.8 / 10.9 / 6.3%
- 固定の設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 朝一恩恵: 天国準備10.9% / 引き戻し6.3%を含むモード再抽選。
- リセット後実践値では強い専用ゾーン/明確な初当たり優遇は確認されず、モード再抽選と分離して保存。
- 朝一不利: 設定変更で前日1280G天井進捗・滞在モードを失う。
- 変更判別: 25Φ NE固有の確定ガックン/初期出目/ランプ契約は **NONE_CONFIRMED_AFTER_RESEARCH**。ガックン「なし？」資料は過去NET筐体からの予測と明記されるため確定仕様にしない。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-02_nurse-witch-komugi-chan-magicalte.md**
- retroQaNextInspection: **2006-02_cutie-honey.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規時系列収集を止めず、QAリレーで順次補完する。

## 次回再開地点
1. **recordCount 976 / chronologicalFrontier 2016-04-18 / 04-18群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.976を最新mainから再取得。
3. 次の未処理機 **スーパーリノMAX**（山佐、2016-04-18、型式 `スーパーリノDX／EE`、検定 `5S0874` を先行確認）から性能コア + resetBehavior v0.7を収集。
4. その後04/18群を全メーカー横断再監査。特に月次一覧に存在する **トリプルクラウンG-30** の具体導入日を検証し、04/18該当なら未処理として追加、別日なら正しい日付へ送る。
5. 追加候補がなければ04/18群をCLOSEDし、次の導入群へ前進。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・設定変更/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ付与。
7. 競合は平均せずCONFLICT/variant差/定義差として双方保存。
8. 遡及QAは `2006-02_cutie-honey.md` から継続。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコード + 最新mainコミットを優先。
- 全国導入日と記事公開日・公式ページ更新日・発表日・納品予定日・地域先行日を混同しない。
- 25Φ/30Φや型式・メーカー・導入時期が分かれるvariantを同名だけで統合しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 設定変更RESETを根拠に据え置き/純電断を自動でCARRYOVER認定しない。
- 前作/後継機・同名別機種のresetBehaviorを流用しない。

## 主要出典 — 取得日 2026-09-08
### No.976 ニューチバリヨ（25Φ）
- ネット公式プレス（Dream News転載）: https://www.dreamnews.jp/press/0000127776
- 鹿児島県公報 / 公安委員会告示第20号: https://www.pref.kagoshima.jp/ab04/kensei/jourei/kouhou/1602/documents/50344_20160215131820-1.pdf
- Re.design 25Φ: https://www.redesign777.tokyo/Spec/SlotView/S2016030118374401?flag=True
- P-WORLD 25Φ: https://www.p-world.co.jp/machine/database/8004
- P-WORLD 30Φ: https://www.p-world.co.jp/machine/database/8005
- ちょんぼりすた: https://chonborista.com/slot/net-slot/19241/
- pachislo-data: https://pachislo-data.com/net/24384
- 期待値見える化: https://slotjin.com/zone/newchibariyo/
- パチ7: https://pachiseven.jp/machines/4791/cutout/2
- 型式variant回顧: https://pachinko.hatenablog.jp/entry/2016/04/new-chibariyo

### 04/18群境界監査
- モゲスロ 2016年新台導入日カレンダー: https://moge-site.com/new-slot2016
- スーパーリノMAX / ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/19332/
- スーパーリノMAX / HAZUSE: https://hazuse.com/machine/pachislot/5S0874/genre/201/
