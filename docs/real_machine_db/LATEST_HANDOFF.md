# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **977**
- latestRecordAdded: **スーパーリノMAX**（山佐）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-04-18_super-reno-max.md`
- chronologicalFrontier: **2016-04-18**
- frontierLatestMachine: **スーパーリノMAX**
- schema: **resetBehavior v0.7**
- status: **2016-04-18_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.976 `2016-04-18_new-chibariyo-25.md` を再取得して開始。
- INDEXは19件時点の旧集約なので、README規定どおり **LATEST_HANDOFF + 実レコード + 最新main** を進捗正本として使用。
- 開始時点: recordCount 976 / chronologicalFrontier 2016-04-18 / 04-18群OPEN。
- GitHub検索でスーパーリノMAXの既存レコードなしを確認してNo.977として追加。

## 2016-04-18群 — CLOSED_FOR_CURRENT_RESEARCH
登録済み:
- No.972 パチスロ マブラヴ オルタネイティヴ トータル・イクリプス（4/11 canonical、4/18資料CONFLICT保持。重複登録しない）
- No.973 スーパーストリートファイターIV パチスロエディション
- No.974 アステカ-太陽の紋章-
- No.975 ニューチバリヨ-30
- No.976 ニューチバリヨ（25Φ）
- No.977 **スーパーリノMAX**

### トリプルクラウンG-30 境界監査
- 月次回顧には「2016年4月」とする資料があるが、複数の後年機種一覧・設定DBは **2016年6月導入** としている。
- P-WORLDは2016モデルであることを確認できるが具体日を固定していない。
- よって04/18へ自動配置せず、**2016年6月群で再監査**する。
- status: `DEFERRED_TO_2016_06_DATE_AUDIT`。

## No.977 — スーパーリノMAX
- manufacturer: **山佐**
- releaseDate: **2016-04-18**
- formalModelName: **スーパーリノDX／EE**
- certificationNumber: **5S0874**
- generation/system: **5号機 / ノーマル / リノ方式 / リアルボーナス連チャン**

### performanceCore
- 機械割（後年解析値）: **97.0 / 98.2 / 99.9 / 102.0 / 105.1 / 108.2%**。
- 導入初期資料では機械割非公開とするものがあるため、数値は公開時点差を分離して保存。
- トマト揃い: **1/516.0 / 500.3 / 485.5 / 458.3 / 434.0 / 409.6**。
- 特殊1枚役合算（TC相当）: **1/172.0 / 166.8 / 161.8 / 152.8 / 144.7 / 136.5**。
- 高確率中ボーナス合算: **約1/12.8**（BIG約1/19.1、REG約1/38.9）。
- ベース canonical: **約30.4G/50枚（設定1・転落状態）**。当時資料の約29Gと表記差保持。
- BIG **約240枚** / REG **約110枚**。
- 天井: **非搭載**。

### resetBehavior v0.7
- 設定変更: **高確率/通常状態CARRYOVER**。
- 据え置き: **CARRYOVER**。
- 純電源OFF→ON: **CARRYOVER**。
- 天井ゲーム数: **NOT_APPLICABLE**。
- 設定変更専用短縮天井: **NOT_APPLICABLE**。
- 設定変更専用モード再抽選: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 朝一重要点: 前日高確率状態が残っていれば、設定変更しても消えず朝一高確残りが成立し得る。ホール側は閉店後に手回しで転落させる対策が可能。
- RAMクリアは通常設定変更と別処理。後年ホール実務資料では初期出荷状態=高確率側とされるため分離保存。
- 変更判別: 本機固有ガックン/初期出目/ランプによる設定変更確定契約は **NONE_CONFIRMED_AFTER_RESEARCH**。

## 04/18後の時系列境界
- HAZUSE新台カレンダーでは2016年4月は **04/04、04/11、04/18** のみで、次のパチスロ導入群は **2016-05-30**。
- 2016年5月は伊勢志摩サミットに伴う入替自粛の影響で、当時資料でも5/30のみの新台入替予定とされる。
- よって次のfrontier候補は **2016-05-30群**。

## 2016-05-30群 — 次回監査候補
先行確認候補:
- **パチスロ コードギアス 反逆のルルーシュ R2**（サミー）
  - Sammy公式マイスロ告知が **2016-05-30をホール導入日** と明記。
  - 一部当時予定記事に6/6表記があるため、予定日 vs 実導入日を分離して確認する。
- **パチスロ 翠星のガルガンティア**（D-Light）
  - 複数解析で2016-05-30。
- **ナイツ2**（山佐）
- **めぞん一刻 桜の下で**（オリンピア）
- **コクッチーブラック**
- **パチスロ バルタン星人**
- 同日候補外も全メーカー横断で再監査する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-02_nurse-witch-komugi-chan-magicalte.md**
- retroQaNextInspection: **2006-02_cutie-honey.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規時系列収集を止めずQAリレーで補完。

## 次回再開地点
1. **recordCount 977 / chronologicalFrontier 2016-04-18 / 04-18群CLOSED** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.977を最新mainから再取得。
3. 2016-04-19〜05-29境界に全国導入機がないか最終監査。HAZUSEと当時入替自粛資料では次群5/30。
4. 次の未処理は **2016-05-30群**。まずSammy公式で実導入日を直接固定できる **パチスロ コードギアス 反逆のルルーシュ R2** を優先し、GitHub既存重複確認後に性能コア + resetBehavior v0.7を収集。
5. 続いて翠星のガルガンティア、ナイツ2、めぞん一刻 桜の下で、コクッチーブラック、バルタン星人等を全メーカー横断監査し、同日群を閉じる。
6. **トリプルクラウンG-30** は4月月次表記を根拠に前倒し登録せず、2016年6月群で具体導入日を再監査。
7. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・設定変更/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ付与。
8. 競合は平均せずCONFLICT/variant差/定義差/予定日vs実導入日として双方保存。

## safeguard
- INDEXは旧集約なので進捗正本にしない。LATEST_HANDOFF + 実レコード + 最新mainを優先。
- 全国導入日と記事公開日・検定日・発表日・納品予定日・地域先行日を混同しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- リノ方式では状態が設定変更を跨ぐ特殊ケースがあるため「設定変更=状態RESET」を自動適用しない。
- 後年の設置期限一覧の日付を全国導入日に転記しない。

## 主要出典 — 取得日 2026-09-08
### No.977 スーパーリノMAX
- HAZUSE: https://hazuse.com/machine/pachislot/5S0874/
- パチ＆スロ必勝本 小役確率: https://p.hisshobon.jp/machine/2748/1/61090
- パチ＆スロ必勝本 ボーナス抽選: https://p.hisshobon.jp/machine/2748/1/61096
- K-Navi: https://p-kn.com/slot/2490/
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/19332/
- スロット日報: https://slotnippou.com/?p=12149
- けんのスロットシミュレーション: https://kenslo65536.com/kaiseki/renomax.html
- パチンコ店長のホール攻略: https://rx7038.com/?p=15890
- P-Summa: https://psumma.jp/pachislo/39596/

### 境界監査
- HAZUSE 新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/
- Sammyマイスロ告知（コードギアスR2 2016-05-30ホール導入）: https://www.sammy.co.jp/japanese/myslot/news/index_11.html
- トリプルクラウンG-30 P-WORLD: https://www.p-world.co.jp/machine/database/8099
- 5号機クロニクル 清龍ゲームジャパン一覧: https://5goki.com/seiryu
- スロリスクタイム ノーマル一覧（トリプルクラウンG-30 2016/6）: https://pachisuro100.com/normal/
