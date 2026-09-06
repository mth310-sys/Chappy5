# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **816**
- latestRecordAdded: **パチスロ マクロスフロンティア2**（SANKYO）— 2014-05-07
- latestRecord: `docs/real_machine_db/machines/2014-05-07_macross-frontier-2.md`
- chronologicalFrontier: **2014-05-07**
- frontierLatestMachine: **パチスロ マクロスフロンティア2**
- schema: **resetBehavior v0.7**
- status: **2014-05-07_GROUP_CLOSED / 2014-05-08_TO_2014-05-11_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2014-05-07_lost-island.md` を再読して正本化。
- INDEXは旧19件集約のままなのでREADME規定に従い、より新しい `LATEST_HANDOFF.md` と実レコードを進捗正本として継続。
- 作業開始時の正本は **815件 / 2014-05-07 パチスロ ロストアイランド / 05-07_GROUP_OPEN**。
- 05-07同日群の未処理 **パチスロ マクロスフロンティア2** を816件目として追加。
- K-Navi全国一斉導入カレンダーを再確認し、2014-05-07のパチスロはロストアイランドとマクロスフロンティア2の2機のみ。両方登録済みとなったため **05-07_GROUP_CLOSED**。
- 次の全国一斉導入パチスロ具体日は **2014-05-12** の「パチスロ サムライチャンプルー 流転輪廻」。よって **2014-05-08〜05-11はCLOSED_FOR_CURRENT_RESEARCH**。

## 今回追加 — パチスロ マクロスフロンティア2

### identity / 性能コア

- manufacturer: **SANKYO**。
- formalModelName: **パチスロマクロスフロンティア2G**。
- inspectionNumber: **4S0166**。
- hall start: **2014-05-07**。K-Navi、HAZUSE、パチビーで一致。
- generation/system: **5号機 / 疑似ボーナス+ART / ゲーム数管理+レア役解除 / CZ搭載**。
- payoutRateBySetting: **97.2 / 98.2 / 100.6 / 104.3 / 108.2 / 111.8%**。
- 疑似ボーナス合算: **1/295.5 / 279.8 / 274.4 / 249.9 / 240.0 / 217.4**。
- ART初当たり: **1/427.3 / 423.1 / 403.4 / 389.1 / 362.4 / 354.3**。
- baseGamesPer50: **約31G/50枚**（HAZUSE直接値。パチマガ旧攻略は同欄調査中のため単一解析系統として保持）。
- netIncrease: **約2.4枚/G**。
- ART「バルキリータイム」: **1セット40G以上**。
- 通常最大天井: **ボーナス間1280G**、到達で **超時空ライブ**。
- coreStatus: **COMPLETE_CORE**。

### resetBehavior v0.7

- settingChangeBehavior: **天井リセット / 内部モード再抽選 / 内部状態再抽選 / 高確マップ再抽選**。
- carryOverBehavior: 据え置きは **天井・内部モード・内部状態・高確マップを引継ぎ**。
- powerCycleBehavior: 設定変更なしの **電源OFF→ONも同じく引継ぎ**を当時朝一比較表で確認。
- gameCounterReset: 設定変更 **RESET_CONFIRMED**、据え置き/純電源再投入 **CARRY_OVER_CONFIRMED**。
- ceilingAfterReset: 専用固定短縮天井は **NONE_CONFIRMED**。ただしモード再抽選で天国A/B合計18.75%へ移行。
- modeAfterReset: 全設定共通 **通常A50.00% / 通常B31.25% / 天国A12.50% / 天国B6.25%**。
- stateAfterReset: 内部状態再抽選。K-Navi整理値では **約30%でボーナス高確**。完全状態振り分け表は今回固定せず。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits: 高確マップ5が設定1/3/5 **30%**、設定2/4/6 **60%**。当時解析でボーナス後map5は一律0.1%とされ、朝一は明確に優遇。
- resetPenalties: 前日ボーナス間天井進捗を失う点。その他専用不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: フェイク前兆は設定変更/据え置きにかかわらず **当日G数依存**のため、111G等ゾロ目煽りだけでは変更判別不可。朝一高確挙動や内部G由来の本前兆は推測材料。本機固有の確定ガックン契約は確認できず。
- publicMorningNumbers: **天国18.75%（約20%） / ボーナス高確約30% / map5 奇数30%・偶数60%**。
- resetBehaviorQA: **COMPLETE_WITH_PUBLIC_MORNING_NUMBERS**。

## conflicts / safeguards

- BIG継続G数は **通常時50〜100G** と **30〜100G** の資料差があるため `CONFLICT_BIG_DURATION_50_100_VS_30_100`。平均しない。
- 後年5号機整理資料の「疑似ボーナス+AT」表記に対し、当時P-WORLD/パチビー/パチマガ/HAZUSEはARTとして扱うため、本DBは当時多数資料に従い **疑似ボーナス+ART** とし分類表記差を注記。
- **2015年 Bonus Live Ver. は別機種**。リセット状態表・純増・ボーナス仕様を本機へ転記しない。

## 2014-05-07群 / 境界監査

K-Navi全国一斉導入カレンダーで05-07のパチスロは2機:
1. **パチスロ ロストアイランド**（Sammy）— No.815 / 処理済み
2. **パチスロ マクロスフロンティア2**（SANKYO）— No.816 / 今回処理済み

- status: **2014-05-07_GROUP_CLOSED**。
- K-Navi上の次パチスロ具体日は **2014-05-12**。
- status: **2014-05-08_TO_2014-05-11_CLOSED_FOR_CURRENT_RESEARCH**。

## 次回再開地点

1. **recordCount 816 / chronologicalFrontier 2014-05-07 / 05-07_GROUP_CLOSED / 05-08〜05-11境界CLOSED** から開始。
2. 次の未処理機種は **パチスロ サムライチャンプルー 流転輪廻（ニューギン）— 2014-05-12**。
3. 性能コア＋resetBehavior v0.7を収集し、05/12同日群を全メーカー横断再監査してCLOSED判定。
4. 現K-Naviカレンダーでは次は **2014-05-19「メイドルナイト」（JIN）→「ハイサイ蝶特急ターボ」（タイヨー）**、その後 **05-26 B-MAX / 麻雀格闘倶楽部 / パチスロ御伽屋HANZO**。各境界で再監査する。
5. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-04_pachislot-abarenbo-shogun.md` を維持。
6. 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意は維持。

## 主要出典 — 取得日 2026-09-07

### 境界 / 導入日
- K-Navi 2014年5月カレンダー: `https://p-kn.com/calendar/201405/`
- K-Navi サムライチャンプルー 流転輪廻: `https://p-kn.com/slot/2034/`

### マクロスフロンティア2
- HAZUSE: `https://hazuse.com/machine/pachislot/4S0166/`
- パチビー: `https://www.pachibee.jp/machines/lecture/214040002`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7371`
- パチマガスロマガ旧攻略: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/34/sankyo_slot_34.php`
- パチスロ解析ガイド: `https://pachislot-guide.net/2014/macross2/`
- man-soft解析: `https://smaslo.man-soft.com/slot-kaiseki/macrossf2.html`
- 期待値見える化 朝一解析（2014-06-25）: `https://slotjin.com/slot/macross-frontier2-morning/`
- K-Navi設定変更補助値: `https://p-kn.com/slot/2041/49476/`
- 5号機クロニクル SANKYO一覧: `https://5goki.com/sankyo`
