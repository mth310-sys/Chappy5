更新日: 2026-09-12

## 現在地点
- recordCount: **1428**
- latestRecordAdded: **パチスロ うしおととら 雷槍一閃 — No.1428**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-09-06_ushio-to-tora-raiso-issen.md`
- chronologicalFrontier: **2021-09-06**
- frontierLatestMachine: **パチスロ うしおととら 雷槍一閃 — No.1428**
- schema: **resetBehavior v0.7**
- status: **2021-09-06_GROUP_OPEN_1_OF_4_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1427「GⅠ優駿倶楽部3」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを正本として進捗判定。
- 2021-09-06群の先頭としてNo.1428「パチスロ うしおととら 雷槍一閃」を追加。
- 遡及QAは `2007-05_sangokushi-igt.md`（三國志 / IGTジャパン）を処理。性能側 `COMPLETE_CORE` は維持し、reset側のみ `PARTIAL_RESEARCH_EXHAUSTED` へ正式化。

## No.1428 — パチスロ うしおととら 雷槍一閃
- path: `docs/real_machine_db/machines/2021-09-06_ushio-to-tora-raiso-issen.md`
- manufacturer: **D-light（大一商会系）**
- formalModel: **Sパチスロうしおととら雷槍一閃JH**
- certificationNumber: **1S0775**
- releaseDate: **2021-09-06**
- generation/system: **6.2号機 / AT（擬似ボーナス・周期抽選）**
- settings: **L / 1 / 2 / 4 / 5 / 6**
- payoutRate: **80.0 / 97.8 / 98.9 / 103.0 / 107.2 / 110.2%**
- 初当たり: **設定1 1/286.9 → 設定6 1/216.1**
- AT初当たり: **設定1 1/685.2 → 設定6 1/313.1**
- baseGamesPer50: **約37.9G/50枚**
- netIncrease: **約2.7枚/G**
- normalCeiling: **有利区間移行後7周期（約700G+α）**
- ceilingReward: **うしとらチャンス60% / 真・うしとらチャンス25% / AT直撃15%**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_MORNING_CZ_BENEFIT**

### resetBehavior v0.7 — No.1428
- **設定変更**: 天井・有利区間・うしおポイントRESET。液晶はおん爺ステージから開始。
- **据え置き/純電源OFF→ON**: 天井・有利区間・うしおポイント・液晶ステージをCARRY_OVER。
- **朝一恩恵**: 設定変更時の一部で内部CZ「激槍慟哭ゾーン」スタート。発生率は公開資料で固定できず、数値推測はしていない。
- **短縮天井**: 設定変更専用の固定短縮天井は確認できず。通常の新規有利区間天井7周期を使用。
- **変更判別**: 通常時有利区間ランプ点灯型。朝一消灯＝設定変更濃厚、点灯＝据え置き濃厚。ただし前日消灯閉店・店側対策時を除く。ステージ/うしおポイント引継ぎも補助判別要素。
- **公開数値**: 天井恩恵60/25/15%は通常天井共通値。設定変更専用の内部CZ発生率、専用モード振り分けはUNPUBLISHED_AFTER_RESEARCH。

## 2021-09-06群 — OPEN
1. **パチスロ うしおととら 雷槍一閃 — No.1428 / DONE**
2. **麻雀物語4 — No.1429候補 / NEXT**
3. **パチスロ楽園追放 — 後続候補**
4. **パチスロ ロリクラ☆ほーるど！ — 後続候補**
- 4機処理後、メーカー横断・PB・地域先行・別型式・延期/段階導入を再監査してCLOSED可否を判断する。

## 次回本線の再開地点
- 最新main再同期後、**2021-09-06群「麻雀物語4」No.1429候補**から継続。
- その後 **パチスロ楽園追放 → パチスロ ロリクラ☆ほーるど！** の順で既知キューを処理。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回処理済み: `docs/real_machine_db/machines/2007-05_sangokushi-igt.md`（三國志 / IGTジャパン）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 確定事項: 設定変更後は内部チャンスゾーン開始。CZ平均約16G、RT突入期待度約50%。
- 未確定継続: 据え置き/純電断時の777G救済カウンタ、CZ/RT残状態、成立済みボーナス処理、本機固有ガックン。一般論で補完しない。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05_kidou-keisatsu-patlabor-x.md`（機動警察パトレイバーX）**。Git追加履歴で三國志追加後の次の実機レコード追加を確認済み。

## GitHub保存
- No.1428追加 commit: `3584faab7fd77f0ec1e4b8c1fcec9c8002a159ea`
- 三國志 reset遡及QA commit: `38c709d9b9adbf774a0a2130368e56df7d592ff2`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1428 うしおととら 雷槍一閃
- https://daiichi777.jp/news/detail/97/
- https://yugi-nippon.com/pachinko-new-machine/post-45468/
- https://hazuse.com/machine/pachislot/1S0495/
- https://hazuse.com/machine/pachislot/1S0495/genre/207/
- https://1geki.jp/slot/s_ushiototora/
- https://1geki.jp/slot/s_ushiototora/3/
- https://www.p-world.co.jp/machine/database/9429
- https://www.slopachi-quest.com/article/usiototora-settei/
- https://slot-seven.com/ushiototora-tenzyou/
- https://ichikatsu.com/ushitora/

### 遡及QA 三國志
- https://www.p-world.co.jp/machine/database/4663
- https://hazuse.com/i/data/sangokushi/top.htm
- https://5goki.com/igt
