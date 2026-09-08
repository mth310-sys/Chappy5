# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **978**
- latestRecordAdded: **パチスロ コードギアス 反逆のルルーシュ R2**（サミー）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-05-30_code-geass-r2.md`
- chronologicalFrontier: **2016-05-30**
- frontierLatestMachine: **パチスロ コードギアス 反逆のルルーシュ R2**
- schema: **resetBehavior v0.7**
- status: **2016-05-30_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.977 `2016-04-18_super-reno-max.md` を再取得して開始。
- INDEXは19件時点の旧集約なので、README規定どおり **LATEST_HANDOFF + 実レコード + 最新main** を進捗正本として使用。
- 開始時点: recordCount 977 / chronologicalFrontier 2016-04-18 / 04-18群CLOSED。
- 2016-04-19〜05-29境界を再監査。HAZUSEカレンダーは2016年5月を05/30のみとし、グリーンべると当時記事で全日遊連の全国一斉入替自粛期間が05/02〜05/27と確認できるため、現調査範囲では **04/19〜05/29をCLOSED_FOR_CURRENT_RESEARCH** とする。
- 次群05/30の未処理先頭「コードギアスR2」をGitHub重複なし確認後、No.978として追加。

## 2016-04-18群 — CLOSED_FOR_CURRENT_RESEARCH
登録済み:
- No.972 パチスロ マブラヴ オルタネイティヴ トータル・イクリプス（4/11 canonical、4/18資料CONFLICT保持。重複登録しない）
- No.973 スーパーストリートファイターIV パチスロエディション
- No.974 アステカ-太陽の紋章-
- No.975 ニューチバリヨ-30
- No.976 ニューチバリヨ（25Φ）
- No.977 スーパーリノMAX

### トリプルクラウンG-30 境界監査
- 月次回顧の「2016年4月」表記だけでは具体導入日を固定せず、複数後年DBの2016年6月表記を優先して **2016年6月群で再監査**。
- status: `DEFERRED_TO_2016_06_DATE_AUDIT`。

## 2016-04-19〜2016-05-29 — CLOSED_FOR_CURRENT_RESEARCH
- HAZUSE新台カレンダーでは4月最終群04/18の次が05/30。
- グリーンべると2016-02-12記事: 全日遊連が伊勢志摩サミット対応として **2016-05-02〜05-27** の全国一斉遊技機入替自粛を決定。
- K-Navi当時解説も5/30まで新台導入がない旨を説明。
- このため05/30より前へ月次資料だけを根拠に機種を前倒し配置しない。

## 2016-05-30群 — OPEN
登録済み:
- No.978 **パチスロ コードギアス 反逆のルルーシュ R2**（サミー）

次の未処理候補:
1. **パチスロ 翠星のガルガンティア**（D-Light）
   - パチビー、ちょんぼりすた等で2016-05-30。
   - パチ7に設定変更後最大300G天井の公開情報あり。次回は性能コア + resetBehavior v0.7を複数ソースで固定する。
2. **ナイツ2**（山佐）
3. **めぞん一刻 桜の下で**（オリンピア）
4. **コクッチーブラック**
5. **パチスロ バルタン星人**
- 05/30群は上記以外も全メーカー横断で再監査し、漏れ確認後にCLOSED判定する。

## No.978 — パチスロ コードギアス 反逆のルルーシュ R2
- manufacturer: **サミー**
- releaseDate canonical: **2016-05-30**
- formalModelName: **コードギアス反逆のルルーシュR2／ZX**
- certificationNumber: **5S1380**
- generation/system: **5号機 / A+ART / セット継続型ART**

### identity / release date
- Sammy公式マイスロが2016-05-30を「本日…ホール導入日」と直接明記（地域差注記あり）。
- P-WORLDでZX / 5S1380を確認。
- 当時解析には2016-06-06、または「6/6（最速5/30）」表記があるため、`RELEASE_DATE_REGION_OR_SCHEDULE_2016_05_30_VS_2016_06_06` を保持。
- chronological canonicalはメーカー公式の実導入告知 **2016-05-30**。

### performanceCore
- 通常掲載機械割: **97.5 / 98.5 / 100.8 / 103.9 / 108.5 / 112.3%**。
- 完全攻略時: **98.5 / 99.5 / 101.8 / 104.9 / 109.5 / 113.3%**。P-WORLDの98.53〜113.3%は完全攻略側と整合するため定義差として分離。
- ボーナス合算: **1/239.2 / 237.4 / 236.6 / 234.1 / 232.4 / 229.1**。
- ART初当たり: **1/624.2 / 589.6 / 507.0 / 450.5 / 376.7 / 339.2**。
- ボーナス+ART合算: **1/172.9 / 169.3 / 161.3 / 154.0 / 143.7 / 136.8**。
- ベース: **約32G/50枚**。
- ART純増: **約1.4枚/G**（ボーナス込み約2.0枚/G表記は別定義）。
- HYPER BIG約250枚 / BIG約180枚 / REG約54枚。
- ART「BLACK REBELLION R2」: **1セット40G**。
- 天井: **ボーナス終了またはART開始後1000G+αでART当選濃厚**。

### resetBehavior v0.7
- 設定変更: **天井RESET / ギアスポイントRESET→0pt or 5pt再初期化 / 内部状態RESELECT**。
- 据え置き: **天井・ギアスポイント・内部状態CARRYOVER**。
- 純電源OFF→ON: **天井CARRYOVER / 内部状態CARRYOVER / RT状態変化なし**。ギアスポイントは据え置き比較からCARRYOVERを支持するが、純電断だけの一次直接表は未確認として注記。
- 設定変更専用固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。リセット後も上限1000G+α。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 公開朝一数値:
  - ギアスポイント: **0pt 50% / 5pt 50%（全設定共通）**。
  - 内部状態: 設定1〜3 **通常62.5% / 高確37.5%**、設定4〜6 **通常50.0% / 高確50.0%**。
- 朝一恩恵: 50%の5ptスタート、高確スタート37.5〜50%。
- 朝一不利: 前日天井進捗と前日保有ギアスポイントを失う。
- 変更判別:
  - 天井跨ぎで据え置き/変更を推測可能。
  - 当時解析でサミー筐体のリールガックン有効、実演動画あり。ただし店側1G回し等で対策可能なので `PRACTICAL_GAKKUN_INDICATOR`。
  - 初期液晶ステージは学園廊下で共通のため単独判別不可。

### data-quality notes
- `PAYOUT_RATE_DEFINITION_97_5_TO_112_3_VS_98_5_TO_113_3`: 通常掲載値 vs 完全攻略値。CONFLICTではなく定義差として両方保存。
- 純電源OFF→ON時ギアスポイントの一次直接比較は `UNVERIFIED_AFTER_RESEARCH`。据え置きCARRYOVER/設定変更時初期化からの支持情報は別記。
- メーカー一次資料でのresetBehavior内部契約表は未発見。攻略解析複数一致を採用。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-02_nurse-witch-komugi-chan-magicalte.md**
- retroQaNextInspection: **2006-02_cutie-honey.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規時系列収集を止めずQAリレーで補完。

## 次回再開地点
1. **recordCount 978 / chronologicalFrontier 2016-05-30 / 05-30群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.978を最新mainから再取得。
3. 次の未処理は **2016-05-30「パチスロ 翠星のガルガンティア」（D-Light）**。GitHub重複確認後、性能コア + resetBehavior v0.7を収集。
4. ガルガンティアは設定変更後最大300G天井という強い朝一数値が公開されているため、通常天井との定義、設定変更/据え置き/電源OFF→ON、モード/状態、変更判別まで複数資料で照合する。
5. 続いてナイツ2、めぞん一刻 桜の下で、コクッチーブラック、バルタン星人等を全メーカー横断監査し05/30群を閉じる。
6. **トリプルクラウンG-30** は2016年6月群で具体導入日を再監査。
7. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・設定変更/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ付与。
8. 競合は平均せずCONFLICT/variant差/定義差/予定日vs実導入日/地域導入差として双方保存。

## safeguard
- INDEXは旧集約なので進捗正本にしない。LATEST_HANDOFF + 実レコード + 最新mainを優先。
- 全国導入日と記事公開日・検定日・発表日・納品予定日・地域先行日を混同しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 通常機械割と完全攻略値を混ぜない。
- 後年の設置期限一覧の日付を全国導入日に転記しない。

## 主要出典 — 取得日 2026-09-08
### No.978 コードギアスR2
- Sammy公式マイスロ: https://www.sammy.co.jp/japanese/myslot/news/index_11.html
- Sammy公式ニュースリリース: https://www.sammy.co.jp/japanese/news/2016/502.html
- P-WORLD: https://www.p-world.co.jp/machine/database/8022
- すろぱちくえすと機種まとめ: https://www.slopachi-quest.com/kisyubetsu/code-geass-r2/
- すろぱちくえすと設定変更: https://www.slopachi-quest.com/article/code-geass-r2-reset/
- パチ7 朝一/天井: https://pachiseven.jp/lp/codegeassr2_tenjo
- pachislo-data: https://pachislo-data.com/sammy/24225
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/18862/

### 境界監査 / 次候補
- グリーンべると 入替自粛: https://web-greenbelt.jp/00008425/
- K-Navi 新台導入がない: https://p-kn.com/beginners/42/264/
- HAZUSE 新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/
- パチビー 翠星のガルガンティア: https://www.pachibee.jp/machines/movie/216050001
- パチ7 ガルガンティア天井: https://pachiseven.jp/machines/4837/cutout/78
