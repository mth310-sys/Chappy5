更新日: 2026-09-12

## 現在地点
- recordCount: **1411**
- latestRecordAdded: **SLOTアルドノア・ゼロ — No.1411**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-05-10_slot-aldnoah-zero.md`
- chronologicalFrontier: **2021-05-10**
- frontierLatestMachine: **SLOTアルドノア・ゼロ — No.1411**
- schema: **resetBehavior v0.7**
- status: **2021-05-10_GROUP_OPEN_2_OF_3_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1410「パチスロ Wake Up, Girls！Seven Memories」を再取得して開始。
- `INDEX.md` は旧表示（19件地点）のため、README規定どおり最新handoffとmain実レコードを正本として進捗判定。
- mainは会話上の以前の地点より先行しており、No.1410まで処理済みだったため重複せずNo.1411から継続。
- No.1411「SLOTアルドノア・ゼロ」を追加。ユニバーサル公式、遊技通信、1geki、なな徹、Pachiseven、P-WORLD、グリーンべると、パチマガスロマガ、ちょんぼりすた、K-Navi、当時立ち回り資料を横断して性能コアとresetBehavior v0.7を収集。
- 型式 `S／アルドノア・ゼロ／NL`、検定番号 `0S1352` を業界検定通過情報で固定。
- 設定変更時は有利区間・内部天井・内部状態をRESETし、新規有利区間として規定ゲーム数/初期ベルptを再抽選。
- 純電断/据え置きは内部天井・内部状態・進行中有利区間をCARRY_OVER。サブ液晶ゲーム数表示は0Gへ戻るため表示RESETと内部進行を分離して保存。
- 通常時有利区間ランプ点灯型のため、未対策なら朝一消灯=設定変更濃厚、点灯=据え置き濃厚。
- 新規有利区間の初期ベルptはチャンスベル成立なら99pt確定。その他成立役は30pt 50.0% / 50pt 25.0% / 70pt 18.8% / 99pt 6.3%。設定変更専用ではなく有利区間移行時共通値として保存。
- 設定変更専用の固定短縮天井・朝一専用モード・CZ高確初期振り分け・本機固有ガックン条件/発生率は再探索後も固定できず、必要箇所を `UNVERIFIED_AFTER_RESEARCH` / `NO_PUBLIC_RESET_SPECIFIC_VALUE_FOUND_AFTER_RESEARCH` とした。
- 遡及resetBehavior QAは本線優先のため今回は進めず、前回カーソルを維持。

## No.1411 — SLOTアルドノア・ゼロ
- path: `docs/real_machine_db/machines/2021-05-10_slot-aldnoah-zero.md`
- manufacturer: **エレコ**
- formalModel: **S／アルドノア・ゼロ／NL**
- certificationNumber: **0S1352**
- releaseDate: **2021-05-10**
- generation/system: **6.1号機 / AT / 擬似ボーナス経由 / ライジングバトルAT**
- payoutRateBySetting: **97.7 / 99.2 / 100.8 / 102.6 / 105.2 / 110.2%**
- AC初当り: **1/299.2 / 269.2 / 281.2 / 249.6 / 269.9 / 223.9**
- AT初当り: **1/499.4 / 419.9 / 416.7 / 342.3 / 319.1 / 227.5**
- AC&AT合算: **1/187.1 / 164.0 / 167.9 / 144.3 / 146.2 / 112.8**
- baseGamesPer50: **約50G/50枚**
- netIncrease: **AT 約2.0〜4.0枚/G / BIG 約4.0枚/G**
- basicPayout: **AC 20G / BIG 20G / AT 1セット30G+α**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_POWER_CYCLE_AND_NUMERIC_INITIAL_SECTION_DATA**

### resetBehavior v0.7 — No.1411
- 設定変更: **有利区間・内部天井・内部状態RESET。新規有利区間として規定G/初期ベルpt再抽選**。
- 据え置き/純電断: **内部天井・内部状態・進行中有利区間CARRY_OVER**。ただしサブ液晶G数表示は0Gへ戻る。
- 通常天井: **有利区間開始から最大666G → AC or BB**。CZ割込み等で告知が666Gを超える場合あり。設定変更専用固定短縮なし。
- 有利区間開始時ボーナス種別: 設定1 **AC 96.9% / 青7BB 3.1%**、設定6 **AC 90.6% / 青7BB 9.4%**。
- AC選択時規定G（設定1）: **1〜128G 20.3% / 129〜192G 3.5% / 193〜256G 31.6% / 257〜320G 2.0% / 321〜384G 9.0% / 385〜448G 1.6% / 449〜512G 13.7% / 513〜576G 0.8% / 577〜640G 17.6%**。
- 初期ベルpt: **チャンスベル=99pt 100%**。その他成立役 **30pt 50.0% / 50pt 25.0% / 70pt 18.8% / 99pt 6.3%**。
- 朝一ステージ: 設定変更時「わだつみ」。通常時からの純電断でも基本「わだつみ」のため単独判別不可。
- 有利区間ランプ: 通常時点灯型。未対策なら**消灯=設定変更濃厚 / 点灯=据え置き濃厚**。
- AC失敗後/AT終了後は必ず非有利区間へ転落するため、その終了契機を跨いだ前有利区間の引継ぎはない。
- CZ高確の設定変更時初期振り分け、本機固有ガックン条件/発生率は `UNVERIFIED_AFTER_RESEARCH`。

## 2021-05-10群 — OPEN
1. **パチスロ Wake Up, Girls！Seven Memories — No.1410 / DONE**
2. **SLOTアルドノア・ゼロ — No.1411 / DONE**
3. **豪炎高校應援團 檄 — No.1412候補 / NEXT**

- status: **2021-05-10_GROUP_OPEN_2_OF_3_PROCESSED**
- 群を閉じる前に全メーカー・地域機・別型式・PB・延期差を再監査する。

## 次回本線の再開地点
- 最新main再同期後、**2021-05-10「豪炎高校應援團 檄」— No.1412候補**から継続。
- 処理後に2021-05-10群を再監査してCLOSED可否を判定し、次の確認済み日付2021-05-24群へ進む。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-05_tokonatsu-aloha.md`（常夏アロハ）。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05-06_astro-kyudan.md`（アストロ球団）**。
- 既存性能値をやり直さずreset側のみ正式再探索する。

## GitHub保存
- No.1411追加 commit: `349e81840be00e84c009b01937c742ec854aaa30`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1411 SLOTアルドノア・ゼロ
- https://www.universal-777.co.jp/news/20210308001498/
- https://www.yugitsushin.jp/news/maker/20210323-1250/
- https://1geki.jp/slot/s_aldnoahzero/
- https://1geki.jp/slot/s_aldnoahzero/3/
- https://1geki.jp/slot/s_aldnoahzero/41/
- https://1geki.jp/slot/s_aldnoahzero/44/
- https://1geki.jp/slot/s_aldnoahzero/80/
- https://nana-press.com/kaiseki/machine/121/3542/
- https://nana-press.com/kaiseki/machine/121/3979/
- https://pachiseven.jp/machines_v2/6296
- https://pachiseven.jp/articles/detail/13420
- https://chonborista.com/slot/universal-slot/134424/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/105/tj07-1.php
- https://web-greenbelt.jp/post-45844/
- https://www.p-world.co.jp/machine/database/9362
- https://p-kn.com/slot/3571/
- https://www.slopachi-quest.com/article/aldnoah-zero-tenjou/
- https://p-media.info/post-26151/
