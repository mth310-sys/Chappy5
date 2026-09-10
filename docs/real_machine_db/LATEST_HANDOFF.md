更新日: 2026-09-11

## 現在地点
- recordCount: **1270**
- latestRecordAdded: **パチスロおそ松さん～驚～**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-03-04_osomatsusan-odoroki.md`
- chronologicalFrontier: **2019-03-04**
- frontierLatestMachine: **パチスロおそ松さん～驚～ — No.1270**
- schema: **resetBehavior v0.7**
- status: **2019-03-04_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1268を再取得して開始。
- INDEXは19件時点の旧スナップショットのため、README規則どおりLATEST_HANDOFF + main実レコードを正本として継続。
- 開始時mainはrecordCount 1268、2019-03-04群OPEN。重複検索後、No.1269 `Re:ゼロから始める異世界生活`、No.1270 `パチスロおそ松さん～驚～` を追加。
- 2019-02-19〜03-03境界を新台カレンダー等で再監査。アナザーハナビ弥生ちゃんは2/25予定資料と3/4実導入DBのCONFLICTを既存No.1268で保持したまま、追加の実導入機は固定できず。
- 2019-03-04群を複数新台カレンダー/機種DBで再監査し、`アナザーハナビ弥生ちゃん / Re:ゼロから始める異世界生活 / パチスロおそ松さん～驚～` の3機を処理済みとして群CLOSED。

## No.1269 — Re:ゼロから始める異世界生活
- manufacturer: **大都技研**
- formalModel: **`S Re：ゼロから始める異世界生活A6`**
- certificationNumber: **`8S1164`**
- generation/system: **6号機 / AT / CZ「白鯨攻略戦」経由+直撃**
- 白鯨攻略戦: **1/523.8 / 1/486.6 / 1/491.4 / 1/402.5 / 1/379.8 / 1/333.8**
- 機械割: **97.4 / 99.0 / 101.0 / 103.9 / 108.0 / 113.3%**
- baseGamesPer50: **約51.5G**
- AT純増: **約8.0枚/G**
- おねだりAttack: **8G+α / 設定1平均約100G上乗せ**
- 最大天井: **通常A 約777G**（745G+前兆表記は定義差として保持）

### resetBehavior v0.7
- settingChange: **天井RESET / モード再抽選 / Re:ゼロぽいんとRESET / コンビニステージ**。
- powerCycle: **天井・モード・内部ポイントCARRY_OVER / レムの部屋**。
- carryOver: 有利区間ランプ点灯・レムの部屋なら据え置き濃厚（店対策等の例外あり）。
- advantageousSectionReset: 設定変更後は有利区間ランプ消灯→コンビニから新たに有利区間セット。消灯だけでは前日CZ/AT後即ヤメ等もあるため確定判別不可。
- resetDetection: コンビニ=変更濃厚、レムの部屋=据え置き濃厚、ランプ点灯=据え置き濃厚。ガックン率はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- numericResetData: 有利区間リセット後朝一1回目の実戦集計で200G以内 **0.26%** / 260G以内 **45.10%**。別の推定高設定集計で200G以内約0.2%、550G以上12.5%。メーカー値ではなくEMPIRICALとして保存。
- conflict: 後年単一ページの純増3.5枚/Gに対し、当時業界一次+複数解析は8.0枚/Gで一致。平均せず8.0をcanonical。
- commit: `586fd6a6b1274a7c651bc5afe60e699b393d7648`

## No.1270 — パチスロおそ松さん～驚～
- manufacturer: **ディ・ライト (D-light) / 大一商会グループ**
- formalModel: **`Sパチスロおそ松さん`**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **6号機 / AT / 疑似ボーナス主体**
- ボーナス初当たり: **1/298.3 → 1/230.2**
- 機械割: **97.5 → 112.1%**
- baseGamesPer50: **約50.4G**
- 純増: **約5.0枚/G**
- BIG/REG: **平均約225枚 / 約50枚**
- 通常天井: **1000G → F6チャンス**

### resetBehavior v0.7
- settingChange: **天井RESET / 内部状態RESET / モード再抽選 / 有利区間RESET**。1G目の小役でモードA～C抽選。
- powerCycle: **天井・内部状態・モードCARRY_OVER**。
- ceilingAfterReset: **最大900G**。通常1000Gから**100G短縮**。
- advantageousSectionReset: 設定変更時、ボーナス後100G目（非リミット到達時）、有利区間リミット到達時にリセットする解析を固定。
- resetBenefits: 100G天井短縮。F6チャンス平均ストック約2.4個。
- resetDetection: 液晶は変更/電断ともおそ松ステージ。本機固有ガックン率・朝一ランプ確定契約は再探索後も未固定。
- sourceEvolution: 初期ちょんぼりすた朝一表では内部状態調査中、後発一撃解析では変更=RESET/電断=CARRY_OVER。公開時点更新差として後発直接表をcanonical。
- commit: `d2c5afe7d60898d156762a9d09086a0706c2a7b5`

## 2019-03-04群
### 登録済み
- No.1268 アナザーハナビ弥生ちゃん
- No.1269 Re:ゼロから始める異世界生活
- No.1270 パチスロおそ松さん～驚～

### 群監査
- モゲスロ2019新台カレンダーは3/4にRe:ゼロ・おそ松さんを掲載、アナザーハナビは2/25掲載。
- 別の導入予定一覧は3/4にRe:ゼロ・アナザーハナビ・おそ松さんの3機を掲載。
- HAZUSEはアナザーハナビを3/4導入開始としているためNo.1268は3/4 canonicalを維持。
- 追加メーカー/別スペック/PB/地域差機を今回固定できず、**2019-03-04_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2006-12_aqua-venus.md`**
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2006-12_thunder-v-special.md`**。すでにv0.7 QA済みなら重複編集せず次の未QA機へ自動前進。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1270を再取得し並行更新確認。
2. **2019-03-05〜03-17境界を短く全メーカー監査**。
3. 現在の次候補は **2019-03-18 `CTザクザク七福神`**。未登録ならNo.1271第一候補として性能コア+resetBehavior v0.7を収集。
4. 3/18同日群の別型式/別スペック/PB/地域差を監査後CLOSED可否判定。
5. 遡及QAは `2006-12_thunder-v-special.md` から確認。

## 主要出典 — 取得日 2026-09-11
### Re:ゼロ
- HAZUSE: https://hazuse.com/machine/pachislot/8S1164/genre/207/
- K-Navi: https://p-kn.com/slot/3187/
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10001012/
- すろかい: https://slotkaiseki.hatenablog.com/entry/rezero
- おスロおパチおいでやす: https://oslo-opachi.com/2019/03/03/post-4814/
- ちょんぼりすた: https://chonborista.com/slot/daito-slot/75346/comment-page-2/
- 期待値見える化: https://slotjin.com/slot/rezero-mode/

### おそ松さん～驚～
- グリーンべると: https://web-greenbelt.jp/00011109/
- パチビー: https://www.pachibee.jp/movies/index/15197
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/d-light_slot/12/a.php
- P-WORLD: https://www.p-world.co.jp/machine/database/8885
- すろぱちくえすと: https://www.slopachi-quest.com/article/osomatsusan-odoroki-reset-2/
- ちょんぼりすた: https://chonborista.com/slot/d-light/75608/comment-page-2/
- 一撃: https://1geki.jp/slot/s_osomatsu_o/3/
- モゲスロ: https://moge-site.com/new-slot2019

### 群監査
- 導入予定一覧: https://crankyseven.com/newmachine-info.htm
