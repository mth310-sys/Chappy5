更新日: 2026-09-12

## 現在地点
- recordCount: **1414**
- latestRecordAdded: **鬼浜爆走紅蓮隊 狂闘旅情編 — No.1414**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-05-24_onihama-bakusou-gurentai-kyoutou-ryojouhen.md`
- chronologicalFrontier: **2021-05-24**
- frontierLatestMachine: **鬼浜爆走紅蓮隊 狂闘旅情編 — No.1414**
- schema: **resetBehavior v0.7**
- status: **2021-05-24_GROUP_OPEN_1_OF_2_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1413「ORIGINAL SLOT4 PLUS」を再取得して開始。
- `INDEX.md` は旧19件表示のためREADME規定どおり `LATEST_HANDOFF.md` とmain実レコードを正本として進捗判定。
- mainはNo.1413 / `2021-05-10_GROUP_CLOSED_AFTER_PB_AND_ALIAS_AUDIT` まで処理済みだったため重複せず、handoff指定の次機 `鬼浜爆走紅蓮隊 狂闘旅情編` をNo.1414として追加。
- 2021-05-24群は一般新台カレンダーで少なくとも `鬼浜爆走紅蓮隊 狂闘旅情編` / `チバリヨ-30` の2機が一致。今回は鬼浜を処理し、群はOPENのまま維持。
- 遡及resetBehavior QAは本線優先のため進めず、既存カーソル「アストロ球団」を維持。

## No.1414 — 鬼浜爆走紅蓮隊 狂闘旅情編
- path: `docs/real_machine_db/machines/2021-05-24_onihama-bakusou-gurentai-kyoutou-ryojouhen.md`
- manufacturer: **ベルコ**
- formalModel: **Sオニハマ4H2**
- certificationNumber: **0S1405**
- releaseDate: **2021-05-24**
- generation/system: **6.1号機 / AT / ゲーム数管理型 / 2段階継続AT**
- payoutRateBySetting: **設定1 97.6% / 2 98.4% / 3 101.3% / 4 104.9% / 6 108.2% / L 80.5%**
- AT初当たり: **1/301.0 / 1/298.5 / 1/281.4 / 1/254.5 / 1/230.9（設定1/2/3/4/6）**
- baseGamesPer50: **約40G/50枚**
- netIncrease: **約2.8枚/G**
- basicPayout: **ツッパリRUSH 1セット30G+α、初回継続期待約50%；真ツッパリRUSH 1セット30G+α、継続期待約80%、期待獲得約620枚**
- normalCeiling: **最大768G+α（A〜D 768 / E 512 / F 384 / G 128）**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_APPLICABLE_RESET_CORE**

### resetBehavior v0.7 — No.1414
- 設定変更: **有利区間RESET / 天井RESET / 状態再抽選 / 真・鬼メーターRESET / 虎水寺ステージ開始**。
- 据え置き: **天井・有利区間・内部状態CARRY_OVER**。鬼メーターは見た目上リセットされるが内部的に引継ぎ。
- 純電断: 据え置きと同様に **天井・有利区間・内部状態CARRY_OVER**。虎水寺ステージ開始。
- ceilingAfterReset: **設定変更後約75%で専用天井振り分け、最深512G+α**。
- 公開専用天井表: A〜D=`256G 0.8% / 384G 0.8% / 512G 98%`、E=`256G 10% / 384G 40% / 512G 50%`、F=`256G 10% / 384G 90%`、G=`128G 100%`。A〜Dは公表丸めで99.6%のため補正せず保存。
- resetDetection: 液晶は変更/据え置きとも虎水寺・鬼メーター見た目リセットのため判別不可。有利区間ランプは通常時点灯型で **点灯=据え置き濃厚 / 消灯=設定変更濃厚**（前日消灯閉店・店側対策等の例外あり）。
- ガックン: 表記揺れ・型式・メーカー・設定変更/リセット/朝一/ガックンを再探索しても本機固有の高信頼直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時だけのモードA〜G選択率は直接固定できず、通常時モード移行率を朝一専用率として流用しない。

## 2021-05-24群 — OPEN
1. **鬼浜爆走紅蓮隊 狂闘旅情編 — No.1414 / DONE**
2. **チバリヨ-30 — No.1415候補 / NEXT**

- 一般新台カレンダー、2021年5月導入一覧で上記2機が同日群として一致。
- `チバリヨ-30` 処理後、全メーカー・沖縄/地域先行・30Φ・PB・別型式・延期/段階導入を再監査してCLOSED可否を判定する。

## 次回本線の再開地点
- 最新main再同期後、**2021-05-24「チバリヨ-30」— No.1415候補**から継続。
- 先行確認: NET / 6.1号機AT / 30Φ / 2021-05-24一般導入 / 純増約3.0枚/G / 約33.7G/50枚。
- 沖縄地域先行・導入日の地域差、正式型式、設定変更/据え置き/電断、32G連、天国/モード、有利区間、朝一短縮/恩恵、ランプ/ガックン判別を重点監査する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-05_tokonatsu-aloha.md`（常夏アロハ）。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05-06_astro-kyudan.md`（アストロ球団）**。
- 既存性能値をやり直さずreset側のみ正式再探索する。

## GitHub保存
- No.1414追加 commit: `8b901fa092a53f20e48fb3b389dcfd1e1a67727e`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1414 鬼浜爆走紅蓮隊 狂闘旅情編
- https://www.s-bellco.co.jp/products/slot/onihama-kyou/
- https://www.s-bellco.co.jp/news/20210311_01/
- https://www.p-world.co.jp/machine/database/9364
- https://www.yugitsushin.jp/news/maker/20210318-1146/
- https://chonborista.com/slot/belko-slot/134651/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/107/kr01.php
- https://nana-press.com/kaiseki/machine/124/3742/
- https://nana-press.com/kaiseki/machine/124/3741/
- https://hazuse.com/machine/pachislot/0S1405/genre/207/
- https://hazuse.com/machine/pachislot/0S1405/genre/209/
- https://slot-seven.com/onihamabakusogurentaikyo-tenzyou/
- https://slothack.net/matome/3346/

### 2021-05-24群監査
- https://ichikatsu.com/newslot/
- https://hisshobon.news/column/1394/
- https://slothack.net/matome/32288/
