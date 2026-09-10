更新日: 2026-09-11

## 現在地点
- recordCount: **1275**
- latestRecordAdded: **新世紀エヴァンゲリオン 暴走400**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-04-01_evangelion-bousou400.md`
- chronologicalFrontier: **2019-04-01**
- frontierLatestMachine: **新世紀エヴァンゲリオン 暴走400 — No.1275**
- schema: **resetBehavior v0.7**
- status: **2019-04-01_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1274を再取得して開始。
- INDEXは旧スナップショットのため、README規則どおりLATEST_HANDOFF + main実レコードを正本として継続。
- handoff指定の次の未処理 `新世紀エヴァンゲリオン 暴走400` をNo.1275として性能コア + resetBehavior v0.7で登録。
- SANKYOオンライン博物館、グリーンべると、K-Navi、P-WORLD、パチマガスロマガ、複数解析を横断。
- 型式 `パチスロ 新世紀エヴァンゲリオン10j`、設定1/2/5/6のS-BIG・REG・合算を公式で固定。
- 通常機械割97.42/98.99/101.68/105.57%、フル攻略99.60/101.17/103.98/108.27%、43.93/45.70/48.30/52.26G/50枚、S-BIG最大407枚、REG最大60枚を取得。
- 全ボーナス後はレイチャレンジ（S-BIG後最大20G / REG後最大10G）から特殊リプレイで50G RTレイチャンスへ。
- 通常ゲーム数天井は非搭載。
- resetBehaviorでは設定変更後1回目のRT終了画面に専用振り分けが存在することを複数解析で確認し、設定1/2/5/6の公開数値を保存。
- 設定変更/据え置き/純電断時のRT残G・内部RT状態・ボーナス成立状態の直接契約は検索語・資料系統を変えても固定できず、その項目だけUNVERIFIED_AFTER_RESEARCH。
- 検定番号とRT純増/Gも十分な再探索後に高信頼値を固定できず欠損維持。

## No.1275 — 新世紀エヴァンゲリオン 暴走400
- manufacturer: **ビスティ（製造表記資料にジェイビーあり）**
- formalModel: **`パチスロ 新世紀エヴァンゲリオン10j`**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5.9号機 / A+RT / 技術介入**
- settings: **1 / 2 / 5 / 6**
- S-BIG: **1/439.8 / 1/434.0 / 1/420.1 / 1/399.6**
- REG: **1/524.3 / 1/524.3 / 1/496.5 / 1/414.8**
- 合算: **1/239.2 / 1/237.4 / 1/227.6 / 1/203.5**
- 通常機械割: **97.42 / 98.99 / 101.68 / 105.57%**
- フル攻略: **99.60 / 101.17 / 103.98 / 108.27%**
- baseGamesPer50: **43.93 / 45.70 / 48.30 / 52.26G**
- basicPayout: **S-BIG最大407枚 / REG最大60枚**
- ceiling: **非搭載**

### resetBehavior v0.7
- settingChange: 設定変更後1回目のRT終了画面に専用振り分けあり。RT残G/内部RT/成立ボーナスの直接契約は未固定。
- carryOver: 据え置き単独のRT残G/成立状態等は `UNVERIFIED_AFTER_RESEARCH`。
- powerCycle: 純電断時のRT残G/内部状態/成立ボーナス等は `UNVERIFIED_AFTER_RESEARCH`。据え置きから推定しない。
- gameCounterReset / ceilingAfterReset: 天井非搭載のため `NOT_APPLICABLE`。
- modeAfterReset: 朝一専用通常モードは確認されず。終了画面専用テーブルは別管理。
- advantageousSectionReset: A+RTの本DB主ゲームフローでは `NOT_APPLICABLE`。
- resetBenefits: 設定変更後1回目RT終了画面で設定示唆画面の選択率が通常時と異なる。出玉恩恵ではなく変更/設定看破材料。
- resetPenalties: 出玉面の設定変更専用不利は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: 設定変更後1回目RT終了画面が主要材料。ガックン公開率は未取得。

### numericResetData — 設定変更後1回目RT終了画面
| 設定 | デフォルト | シンジ | アスカ | レイ | アスカ・シンジ・レイ | エヴァ3機 |
|---:|---:|---:|---:|---:|---:|---:|
| 1 | 56.25% | 25.00% | 18.75% | 0% | 0% | 0% |
| 2 | 46.25% | 18.75% | 25.00% | 10.00% | 0% | 0% |
| 5 | 46.25% | 25.00% | 18.75% | 5.00% | 2.50% | 2.50% |
| 6 | 46.25% | 18.75% | 25.00% | 5.00% | 2.50% | 2.50% |

## 2019-04-01群
### 登録済み / 境界照合
- No.1272 ドンちゃん2 — canonical 2019-03-25先行導入 / 2019-04-01本格導入。既存v0.7レコードを確認し、重複登録しない。
- No.1273 戦国パチスロ 義風堂々!!～兼続と慶次～ — 2019-04-01 vs 2019-04-08の導入日CONFLICT保持。
- No.1274 パチスロ猛獣王 王者の咆哮 — 2019-04-01。
- No.1275 新世紀エヴァンゲリオン 暴走400 — 2019-04-01。

### 群監査
- K-Navi 2019年4月カレンダー、パチンコ・パチスロ.com当時新台カレンダー、2-9伝説系2019一覧、各機種別資料を横断。
- K-Navi 4/1一覧は暴走400/猛獣王を掲載。別当時カレンダーはドンちゃん2（4/1本格導入）を掲載。2-9伝説系一覧は義風堂々も4/1として掲載。
- ドンちゃん2は既存No.1272で3/25先行/4/1本格の地域差を保持済みのため、今回重複作成しない。
- 追加の独立4/1機を固定できなかったため **2019-04-01_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**。

## 2019-04-08群 — 次回候補
- **ゴーゴージャグラー2**
- **マイフラワー-30**
- **ワンダフルジャック**
- 義風堂々はNo.1273で4/1 vs 4/8 CONFLICT済みのため重複登録しない。
- 次回は複数導入カレンダーを再取得し、上記以外の同日機・別型式/別スペック/PB/地域差を監査してから群件数を確定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2007-02_playboy.md`**
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2007-02_playboy-30.md`**
- 既存性能CONFLICTは崩さず、resetBehaviorのみ順次再探索・別管理する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1275を再取得。
2. **2019-04-08群をOPENし、最初の未処理機種を時系列・導入資料照合後にNo.1276候補として登録。第一候補はゴーゴージャグラー2。**
3. マイフラワー-30 / ワンダフルジャックおよび同日漏れを順次処理。
4. 4/8群を全メーカー/別型式/別スペック/PB/地域差まで監査してCLOSED判定。
5. 遡及QAは `2007-02_playboy-30.md` から再開。

## 主要出典 — 取得日 2026-09-11
### 新世紀エヴァンゲリオン 暴走400
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/887/
- グリーンべると: https://web-greenbelt.jp/00011179/
- K-Navi: https://p-kn.com/slot/3221/
- P-WORLD: https://www.p-world.co.jp/machine/database/8921
- パチマガスロマガ（ベース）: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/35/c.php
- パチマガスロマガ（終了画面）: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/35/en04.php
- ちょんぼりすた: https://chonborista.com/slot/bisty-slot/81057/
- すろぱちくえすと: https://www.slopachi-quest.com/article/eva-bousou400/
- スロット解析情報~すろかい~: https://slotkaiseki.hatenablog.com/entry/eva400

### 2019-04-01群監査
- K-Navi 2019年4月新台カレンダー: https://p-kn.com/calendar/201904/
- パチンコ・パチスロ.com 2019新台カレンダー: https://pachinkopachisro.com/archives/52807194.html
- 2-9伝説系新台一覧: https://29den.com/newslot/

### 遡及QA引継ぎ
- 次対象: `docs/real_machine_db/machines/2007-02_playboy-30.md`
