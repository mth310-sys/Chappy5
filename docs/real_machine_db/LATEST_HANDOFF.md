更新日: 2026-09-11

## 現在地点
- recordCount: **1306**
- latestRecordAdded: **スーパービンゴギャラクシー — No.1306**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-09-17_super-bingo-galaxy.md`
- chronologicalFrontier: **2019-09-17**
- frontierLatestMachine: **スーパービンゴギャラクシー — No.1306**
- schema: **resetBehavior v0.7**
- status: **2019_09_17_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧スナップショットの `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1304を再取得して開始。
- mainは既にNo.1304 / 2019-09-02群CLOSEDまで進んでいたため、古いチャット進捗へ戻らず最新handoffを正として継続。
- 2019-09-03〜09-16境界を監査し、9/17の既知導入群へ進行。
- No.1305 **`パチスロ ラブ嬢2`** を登録。
- No.1306 **`スーパービンゴギャラクシー`** を登録。
- 日刊スポーツ導入カレンダーと個別当時資料で2019-09-17パチスロ群は上記2機で一致したため **CLOSED**。
- Sオリスロ2AA系列の `タマどき！` は遊技通信系資料で9〜10月導入計画、パチマガスロマガで2019年10月扱い。9/17群へ混入させず、次境界監査で個別導入時期を確定する。
- `プレドキ！` は後年DBで2019年10月導入表記あり。導入法人/独立レコード要否/実導入日を次回継続監査。

## No.1305 — パチスロ ラブ嬢2
- manufacturer: **オリンピア**
- formalModel: **`Sパチスロラブ嬢2L2`**
- certificationNumber: **`9S0385`**
- releaseDate: **2019-09-17**
- generation/system: **6号機 / ベルナビ回数+継続率管理AT**
- payout: **97.5 / 99.8 / 101.8 / 104.0 / 105.8 / 112.0%**
- AT初当たり: **1/330.0 / 287.8 / 261.4 / 238.2 / 227.2 / 182.5**
- baseGamesPer50: **51.0 / 51.2 / 51.5 / 52.2 / 53.7 / 55.0G**。概数約51G資料もあり、平均化しない。
- netIncrease: **約3.0枚/G**
- AT basic: ベルナビ回数+継続率管理。初回上乗せパート最低8G、以降最低4G、継続チャンス10G。
- VIP BONUS: **20G / 約60枚**
- 天井: **12周期（1周期平均約60G、概ね約720〜780G級）→AT**

### resetBehavior v0.7 — No.1305
- settingChange: **天井周期RESET / 有利区間RESET / ランプ消灯 / キャストスタンバイステージ**。
- carryOver/powerCycle: **天井周期 / 内部進行 / 有利区間 CARRY_OVER**。表示Gは`??G`でも内部進行は引継ぎ。
- mode/state: 有利区間移行時にATレベル初期値を抽選。設定変更専用の別天井モード/短縮天井は確認できず。
- resetBenefits: 設定変更専用短縮天井・朝一高確・専用初当たり優遇率は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: 前日点灯条件が確認できる場合、朝一有利区間ランプ **消灯=設定変更濃厚 / 点灯=据え置き濃厚**。前日消灯なら単独判別不可。
- gakkun: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- publicMorningNumbers: 設定変更専用の比較可能な確定数値は `NONE_CONFIRMED_AFTER_RESEARCH`。通常有利区間移行時ATレベル振り分けを朝一専用値として扱わない。

## No.1306 — スーパービンゴギャラクシー
- manufacturer: **ベルコ**
- formalModel: **`SスーパービンゴギャラクシーG3`**
- certificationNumber: **`8S1314`**
- releaseDate: **2019-09-17**
- generation/system: **6号機 / 周期管理AT**
- payout: **97.5 / 99.5 / 101.5 / 104.0 / 107.0 / 110.0%**
- CZ合算: **1/345.7 / 329.4 / 312.2 / 295.9 / 280.3 / 266.8**
- BC初当たり: **1/637.7 / 610.0 / 580.1 / 552.0 / 524.1 / 501.2**
- baseGamesPer50: **約50G/50枚**
- netIncrease: **約4.6枚/G**
- AT basic: **BINGO CHANCE 1セット33G**。初回突破約50%、2セット目以降約80%ループ。
- 天井: CZ終了後/エンディング後は外れ周期6回、通常BC後は引き戻し周期を含むため外れ周期7回。平均約700〜800G前後。

### resetBehavior v0.7 — No.1306
- settingChange: **周期消化G RESET / 規定G RESET / 有利区間ランプRESET / 液晶停止パターンRESET**。開始サターン、液晶図柄8・6・5。
- powerCycle/carryOver: **周期消化G / 規定G / 有利区間ランプ CARRY_OVER**。ただしセグ表示自体はRESET、液晶停止パターンもRESET。
- advantageousSection: 設定変更でRESET、電断でCARRY_OVER。
- resetBenefits: 非有利区間中レア役はCZ/AT直撃に若干期待とする当時解析あり。ただし攻略上「設定変更時の狙い目なし」。
- resetDetection: 前日点灯条件を確認できる場合、朝一点灯=据え置き濃厚 / 消灯=設定変更濃厚。CZ終了後等の自然消灯があるため前日状態不明なら確定条件ではない。
- gakkun: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- publicMorningNumbers: 設定変更専用モード振り分け/短縮天井/朝一特定G当選率は `NONE_CONFIRMED_AFTER_RESEARCH`。

## 2019-09-17群 — CLOSED
1. **パチスロ ラブ嬢2** — No.1305。
2. **スーパービンゴギャラクシー** — No.1306。

日刊スポーツ2019-09導入カレンダーで9/17パチスロは2機種。両機を個別の当時解析・HAZUSE・業界記事で再照合。別型式/後継機を混同しない。

## Sオリスロ2AA 系列 — 継続監査
1. SLOT WONDER AGENT — 2019-07-08 / No.1298 / 登録済み。
2. BELLE CITY — 2019-08-05 / No.1299 / 登録済み。
3. 花娘 — 2019-08-19 / No.1300 / 登録済み。
4. どき！すろ — 2019-08-19 / No.1301 / 登録済み。
5. タマどき！ — **2019年10月候補**。遊技通信系一次資料はコンチェルト系へ9〜10月導入計画、パチマガスロマガは2019年10月。個別実導入日を次境界で確定して登録。
6. プレドキ！ — **2019年10月候補**。P-WORLD/後年DBで同一性能を確認。導入法人・時期・独立レコード要否を継続監査。

## 2019-08-05群 — REOPENED / NOT CLOSED
- No.1293 パチスロあの日見た花の名前を僕達はまだ知らない。
- No.1294 麻雀格闘倶楽部参
- No.1295 パチスロ 天元突破グレンラガン
- No.1296 ハイハイシオサイ
- No.1297 バンバンクロス
- No.1299 BELLE CITY
- Sオリスロ2AA系列の遡及補完継続中のため最終CLOSED判定は保留。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: `docs/real_machine_db/machines/2007-03-11_treasure-pirates.md`
- latestFormalized: `docs/real_machine_db/machines/2007-02_skylove.md`
- latestFormalizedStatus: **PARTIAL_RESEARCH_EXHAUSTED**
- nextRetroQaAction: **`docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md`（革命戦士長州力）**。既QAなら次のGit追加順へ進み、reset欠損/旧形式なら性能コアを崩さずreset側だけ補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1305 / No.1306 を再取得。
2. 次の時系列境界 **2019-09-18〜10-06** を全メーカー / 別型式 / 別スペック / PB / 地域差込みで監査。
3. この境界で **Sオリスロ2AA `タマどき！ / プレドキ！`** の実導入日・法人・独立レコード要否を最優先で確定。10月導入が確定したものは時系列位置へ登録。
4. 次の既知全国導入群は **2019-10-07**。少なくとも **`パチスロ 南国娘2`（25Φ / 平和）** と **`パチスロ 南国娘2-30`（30Φ / アムテックス）** が別型式・別スペックとして確認済み。PB監査後にNo.1307以降を確定する。
5. 遡及QAは **革命戦士長州力** から再開。

## 主要出典 — 取得日 2026-09-11
### No.1305
- HAZUSE: https://hazuse.com/machine/pachislot/9S0385/
- おスロおパチおいでやす: https://oslo-opachi.com/2019/09/11/lovejo2_tenjyou/
- 期待値見える化: https://slotjin.com/slot/lovejo2-reset/
- 一撃 ATレベル: https://1geki.jp/slot/s_lovej2/84/
- K-Navi: https://p-kn.com/slot/3286/
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10001290/
- グリーンべると: https://web-greenbelt.jp/00011411/

### No.1306
- ベルコ公式: https://www.s-bellco.co.jp/products/slot/superbingo_galaxy/
- HAZUSE: https://hazuse.com/machine/pachislot/8S1314/
- おスロおパチおいでやす: https://oslo-opachi.com/2019/09/12/bingogalaxy_tenjyou/
- すろぱちくえすと: https://www.slopachi-quest.com/article/super-bingo-galaxy-tennjou/
- PiDEA: https://www.pidea.jp/articles/%E9%AB%98%E7%B4%94%E5%A2%97%26%E6%B8%9B%E5%B0%91%E5%8C%BA%E9%96%93%E3%81%AA%E3%81%97%E3%80%8C%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%93%E3%83%B3%E3%82%B4%E3%82%AE%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%B7%E3%83%BC%E3%80%8D%EF%BC%8F%E3%83%99%E3%83%AB%E3%82%B3

### 2019-09-17群 / 次境界監査
- 日刊スポーツ導入カレンダー: https://www.nikkansports.com/m/amusement/pachislot/news/amp/201909060000314.html
- 遊技通信系Sオリスロ2AA記事: https://nagasaki-yukyo.or.jp/information/jps%E3%80%81at%E9%80%A3%E6%9C%80%E5%A4%A7%E7%B4%8490%EF%BC%85%E3%82%92%E5%AE%9F%E7%8F%BE%E3%81%97%E3%81%9F6%E7%A4%BE%E5%85%B1%E5%90%8C%E4%BC%81%E7%94%BB%E3%81%AEpb%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD/
- パチマガスロマガ タマどき!: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/41/a.php
- P-WORLD プレドキ!: https://www.p-world.co.jp/machine/database/9067
- HAZUSE 南国娘2 25Φ: https://hazuse.com/machine/pachislot/8S1296/
- HAZUSE 南国娘2-30: https://hazuse.com/machine/pachislot/8S1147/
