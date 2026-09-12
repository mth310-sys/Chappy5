更新日: 2026-09-12

## 現在地点
- recordCount: **1476**
- latestRecordAdded: **押忍！番長ZERO — No.1476**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-01-31_osu-bancho-zero.md`
- chronologicalFrontier: **2022-01-31**
- frontierLatestMachine: **押忍！番長ZERO — No.1476**
- schema: **resetBehavior v0.7**
- status: **2022-01-31_GROUP_CLOSED_1_OF_1_KNOWN_RECORD_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1475「HYPER A-30 BLUE FALCON」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定の次機 `押忍！番長ZERO` をNo.1476へ追加。
- 2022-01-31導入は複数新台カレンダー/解析資料で一致。現時点の1/31全国導入群は本機1機を確認しCLOSED。
- 性能コアは設定1〜6の機械割97.6/98.7/101.5/105.3/109.1/113.0%、ボーナス初当り1/246.0〜1/179.5、ベース約35G/50枚、AT/擬似ボーナス純増約2.7枚/G、AT「頂ROAD」1セット30G以上を保存。
- 型式は `S押忍！番長ZERO PC1` を複数資料で確認。検定番号は今回固定できる一次/業界DB値を取得できず `UNVERIFIED_AFTER_RESEARCH`。
- 通常時ゲーム数天井は600G+αでBB以上。天井契機でREGならAT濃厚と解析資料で確認。
- resetBehavior v0.7は、設定変更時に天井/内部状態/押忍ポイント/有利区間をRESETし、ZEROモードから開始。据え置きは天井/内部状態/押忍ポイントをCARRY_OVER。
- 純電源OFF→ONでは天井・内部状態を引き継ぐ。さらにZEROモード非滞在でも1回目の特訓まで鋼鉄が紫オーラを纏うため、朝一紫オーラ単独では設定変更判別不可。
- ZEROモードは最大390押忍pt、規定pt到達時の初当り期待度50%超、初当り時BB比率80%超。設定変更後・ボーナス後・AT後に突入。
- 有利区間ランプは通常時消灯タイプで、朝一ランプのみでは設定変更/据え置き判別不可。朝一1周期目で390ptを超えればZEROモード否定となり据え置き濃厚材料。
- 本機固有の設定変更ガックン条件/発生率は、機種名・型式・パオン・ディーピー/大都技研・設定変更/リセット/朝一/据え置き/電源OFF ON/ガックンで再探索後も直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- ベースは導入当時複数資料で約35G/50枚が一致。一部後年整理サイトに約33G表記があるため平均せずMINOR_SOURCE_DIFFERENCEとして保持。
- 次の明確な全国導入境界は2022-02-07。現時点で `BLACK LAGOON ZERO bullet MAX` と `パチスロドリフターズ` の2機を先行確認。
- 遡及resetBehavior QAは本線を優先し、前回カーソルを維持。

## No.1476 — 押忍！番長ZERO
- path: `docs/real_machine_db/machines/2022-01-31_osu-bancho-zero.md`
- manufacturer: **パオン・ディーピー / 大都技研**
- formalModel: **S押忍！番長ZERO PC1**
- inspectionCode: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2022-01-31**
- generation/system: **6.2号機 / AT / 擬似ボーナス+AT / 押忍ポイント・モード管理**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.6 / 98.7 / 101.5 / 105.3 / 109.1 / 113.0%**
- initialHit: **1/246.0 / 1/239.4 / 1/224.0 / 1/207.8 / 1/193.7 / 1/179.5**
- baseGamesPer50: **約35G**
- netIncrease: **約2.7枚/G**
- basicPayout: **頂ROAD 1セット30G以上 / 番長ボーナス30G / REGベルナビ8回 / 超番長ボーナス50G**
- normalCeiling: **600G+α → BB以上**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_MINOR_UNVERIFIED**
- confidence: **HIGH_CORE_HIGH_RESET_MINOR_MACHINE_SPECIFIC_GAKKUN_UNVERIFIED**

### resetBehavior v0.7 — No.1476
- **設定変更**: 天井・内部状態・押忍ポイント・有利区間RESET。ZEROモード開始。
- **据え置き**: 天井・内部状態・押忍ポイントCARRY_OVER。
- **純電源OFF→ON**: 天井/内部状態CARRY_OVER。非ZEROでも1回目特訓まで紫オーラが出るため紫オーラ単独判別不可。
- **ゲーム数/天井**: 通常600G+αでBB以上。設定変更専用の固定ゲーム数短縮ではなく、ZEROモードの最大390ptが朝一優遇として機能。
- **モード/状態**: 通常/チャンス/ZERO。設定変更後はZERO。ZERO最大390pt、規定pt到達時初当り期待度50%超、当選時BB比率80%超。
- **有利区間**: 設定変更時RESET。ボーナス終了/AT終了/REG後対決・特訓失敗でもリセットしZEROへ。通常時ランプ消灯型。
- **朝一恩恵/不利**: ZEROモードによる浅い規定ptと高い当選期待度。主要な設定変更専用不利は確認できず。
- **変更判別**: 有利区間ランプでは不可。朝一1周期目で390pt超過は据え置き濃厚材料。紫オーラは電断後にも出るため単独使用不可。ガックンはUNVERIFIED_AFTER_RESEARCH。
- **公開朝一数値**: ZERO最大390pt / 規定pt到達時初当り期待度50%超 / 当選時BB比率80%超。

## 次回本線の再開地点
- **2022-02-07群を開始し、No.1477候補「BLACK LAGOON ZERO bullet MAX」から処理。**
- 同日群で現時点確認済み: `BLACK LAGOON ZERO bullet MAX`（エフ / 型式 `SブラックラグーンゼロFK` / 検定番号1S1440）→ `パチスロドリフターズ`（Sammy / 型式 `S パチスロドリフターズ ZS` / 検定番号1S1187）。
- 2/7同日群に他の独立機種・PB・30Φ別型式・地域先行がないか、新台カレンダー/業界記事/メーカー別一覧で再監査してから群をCLOSED判定する。
- 性能コアとresetBehavior v0.7を同時収集する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は本線を優先し新規更新なし。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-03-04_pachislot-abarenbo-shogun.md`（パチスロ暴れん坊将軍）**。

## GitHub保存
- No.1476追加 commit: `dce65aefdff0e00da6475d17e7d3b0170ae4a78a`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1476 押忍！番長ZERO
- https://news.p-world.co.jp/articles/19366/nippon
- https://ichikatsu.com/newslot2022/
- https://1geki.jp/slot/s_osubancho_zero/
- https://nana-press.com/kaiseki/machine/167/10134/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/81/tj03-1.php
- https://slothack.net/matome/54962/
- https://slotkaiseki.com/banchouzero_modetenjou/
- https://slot-seven.com/osubanchozero-tenzyou/
- https://www.nakaiti.com/html/sPaonDP004.html

### 次回候補 2022-02-07群
- https://hazuse.com/machine/pachislot/1S1440/genre/202/
- https://hazuse.com/machine/pachislot/1S1187/genre/202/
- https://29den.com/newslot/
