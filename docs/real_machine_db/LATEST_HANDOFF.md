更新日: 2026-09-09

## 現在地点
- recordCount: **1036**
- latestRecordAdded: **TVアニメーション 弱虫ペダル**（オリンピア / 平和）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-01-03_tv-animation-yowamushi-pedal.md`
- chronologicalFrontier: **2017-01-03**
- frontierLatestMachine: **TVアニメーション 弱虫ペダル — No.1036**
- schema: **resetBehavior v0.7**
- status: **2016-12-19_GROUP_CLOSED_FOR_CURRENT_RESEARCH / 2016-12-20_TO_2017-01-02_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH / 2017-01-03_GROUP_OPEN_RELEASE_DATE_CONFLICT_AUDIT_REQUIRED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1035実レコードを再取得して開始。
- main正本は **1035件 / chronologicalFrontier 2016-12-19 / 12/19群CLOSED**。過去チャットの古いNo.1032地点へ戻らず、handoff指定の12/20〜2017/01/02境界監査から継続。
- ALL7 2016年12月一覧では12/19以降の未登録パチスロ本線を確認できず、HAZUSEは12/26日付ノードを持つが、検索語・導入カレンダー・業界記事を変えて再探索しても12/26全国導入の独立パチスロ機を固定できなかった。
- よって **2016-12-20_TO_2017-01-02_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH** とし、次の導入ノードへ前進。
- HAZUSE / K-Navi / 一撃で **TVアニメーション 弱虫ペダル**を2017-01-03導入として確認しNo.1036登録。平和公式打-WINも同機サービスを2017-01-03開始とする。
- ただしグリーンべると当時業界記事は2017-01-09納品開始予定、後年解析複数は2017-01-10導入とするため `CONFLICT_RELEASE_DATE_2017_01_03_VS_DELIVERY_2017_01_09_VS_2017_01_10` を保持。canonicalは複数導入開始DB＋メーカーサービス開始日の一致を優先し2017-01-03。
- 1/03群はこの日付CONFLICTの全国/地域・納品/稼働定義を最終監査するためOPENのまま。次回は1/03同日全メーカー監査後、2017-01-10群へ進む。

## No.1036 — TVアニメーション 弱虫ペダル
- manufacturer: **オリンピア / 平和**
- releaseDate canonical: **2017-01-03**
- releaseDate conflict: **2017-01-03 vs 2017-01-09納品開始予定 vs 2017-01-10**
- formalModelName: **TVアニメーション弱虫ペダル／Y1**
- certificationNumber: **6S0856**
- generation/system: **5号機 / 5.5号機期 / A+ART / ボーナス規定回数モード / 複数天井**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_RELEASE_DATE_CONFLICT**

### performanceCore
- 機械割 canonical: **96.5 / 97.9 / 100.7 / 104.6 / 105.0 / 110.2%**。
- 設定4のみ後年資料に104.8%表記あり。平均せず `CONFLICT_SETTING4_PAYOUT_104_6_VS_104_8`。
- ボーナス合算: **1/147.60 / 146.94 / 146.29 / 133.75 / 133.20 / 127.50**。
- ART初当たり: **1/399.7 / 370.4 / 391.8 / 305.9 / 342.1 / 251.5**。
- baseGamesPer50: **約33.8〜34G/50枚**。
- ART単体純増 **約1.6枚/G**、ボーナス込み **約1.9枚/G**、1セット **40G+α**。
- BIG **約204枚**、総北チャンス **約60枚**。
- 通常天井系: ボーナス間500G超後の次回ボーナスでART、別規定G天井最大777G、ART非当選ボーナス規定回数は通常最大10スルー後11回目。

### resetBehavior v0.7
- settingChangeBehavior: **ボーナス間G RESET / 通常ボーナス規定回数RESELECT / 特殊ボーナス規定回数RESELECT / 内部状態RESELECT / RT状態CARRYOVER**。
- carryOverBehavior: 据え置きは前日進捗を継続する攻略契約。純電源OFF→ONは直接比較表で各進捗引継ぎを確認。
- powerCycleBehavior: **ボーナス間G・通常/特殊ボーナス規定回数・内部状態・RT状態CARRYOVER**。
- gameCounterReset: 設定変更でボーナス間Gとスルー/規定回数進捗を初期化/再抽選。電断は引継ぎ。
- ceilingAfterReset: 設定変更時はモードAを選ばない。設定1〜3では通常ボーナス規定回数が最大5回。設定4〜6は特殊モードEが50%のため6〜10回もあり得る。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetDetection: 当時実機ガックン検証では実用困難。`GACKUN_NOT_PRACTICALLY_USABLE`。朝一ステージ単独の確定判別は `NONE_CONFIRMED_AFTER_RESEARCH`。

### public reset numeric data
設定変更時通常ボーナス規定回数モード:
| モード | 設定1〜3 | 設定4〜6 | 規定回数 |
|---|---:|---:|---|
| A | 0% | 0% | 5〜10回 |
| B | 64.84% | 14.84% | 1〜5回 |
| C | 25.00% | 25.00% | 1〜3回 |
| D | 10.16% | 10.16% | 1回 |
| E/特殊 | 0% | 50.00% | 6〜10回 |

設定変更時内部状態:
| 設定 | 低確 | 高確 | 超高確 |
|---:|---:|---:|---:|
| 1〜3 | 79.7% | 18.8% | 1.6% |
| 4〜5 | 64.8% | 30.5% | 4.7% |
| 6 | 59.8% | 34.0% | 6.3% |

- 設定変更時のみ1回有効の特殊ボーナス規定回数: **設定1〜3は20回目 / 設定4〜6は15回目or20回目**。
- 設定4〜6の15/20個別振り分け率は再探索後も今回固定できず `UNVERIFIED_AFTER_RESEARCH`。

## data quality
- 平和のパチンコ版 `CR TVアニメーション 弱虫ペダル` を混入させていない。
- HAZUSE/K-Navi/一撃の1/3、平和公式打-WINの1/3サービス開始、グリーンべるとの1/9納品開始予定、後年解析の1/10をすべて保持。導入日の定義差はCONFLICT。
- resetBehaviorは一撃の設定変更/電源OFF ON直接比較表、すろぱちくえすと、期待値見える化を相互照合。
- 機械割設定4のみ104.6/104.8競合を平均化していない。

## 境界監査
- **2016-12-19_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- **2016-12-20_TO_2017-01-02_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。
- **2017-01-03_GROUP_OPEN_RELEASE_DATE_CONFLICT_AUDIT_REQUIRED**。
- chronologicalFrontier: **2017-01-03**。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規本線を止めず、既存未QAレコードを最新main実体から順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1036を再取得。
2. **1036件 / chronologicalFrontier 2017-01-03 / 1/03群OPEN** を正本として継続。
3. 1/03同日全メーカー監査を完了し、弱虫ペダル以外の全国導入パチスロがなければ群をCLOSED。
4. 弱虫ペダルの1/3・1/9・1/10差について、地域先行/納品/全国稼働の一次資料が追加で得られればreleaseDateを再判定。固定できなければCONFLICT維持。
5. 次の本線は **2017-01-10群** を横断。`パチスロ モンスターハンター～狂竜戦線～` は2016-12-19以降の地域先行と2017-01-09/10全国導入を分離して扱う。地域先行をcanonicalへ早取りしない。
6. 1/10群では弱虫ペダルを重複追加しない。メーカー/業界/HAZUSE/K-Navi/ALL7/当時解析を横断し、次未処理機をNo.1037候補とする。
7. 性能コア＋resetBehavior v0.7を同時収集。欠損は検索語・資料系統変更後のみUNVERIFIED、競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-09
### 境界
- ALL7 2016年12月導入予定一覧: https://www.all7.jp/plans/index/2016/12
- HAZUSE 新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/

### No.1036 TVアニメーション 弱虫ペダル
- 平和 打-WIN: https://www.heiwanet.co.jp/da-win/news.html
- グリーンべると: https://web-greenbelt.jp/00009118/
- HAZUSE: https://hazuse.com/machine/pachislot/6S0856/
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/6S0856/genre/201/
- HAZUSE 天井: https://hazuse.com/machine/pachislot/6S0856/genre/207/
- 一撃 機種トップ: https://1geki.jp/slot/s_yowamushipedal/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_yowamushipedal/3/
- 一撃 ボーナス規定回数: https://1geki.jp/slot/s_yowamushipedal/43/
- 一撃 ART概要: https://1geki.jp/slot/s_yowamushipedal/81/
- K-Navi: https://p-kn.com/slot/2665/
- 期待値見える化: https://slotjin.com/zone/yowapeda/
- すろぱちくえすと: https://www.slopachi-quest.com/article/yowamushi-pedal-reset/
- ちょんぼりすた: https://chonborista.com/slot/orinpia-slot/28557/
