# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **829**
- latestRecordAdded: **パチスロ鉄拳3rd**（山佐）— 2014-07-07
- latestRecord: `docs/real_machine_db/machines/2014-07-07_tekken-3rd.md`
- chronologicalFrontier: **2014-07-07**
- frontierLatestMachine: **パチスロ鉄拳3rd**
- schema: **resetBehavior v0.7**
- status: **2014-07-07_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、828件目 `2014-07-07_magical-taruruto-kun.md` を再読。
- INDEXは19件表記の旧集約状態。README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として継続。
- 作業開始時点でmainは過去リレー想定より先行し、正本は **828件 / 2014-07-07 / 07-07_GROUP_OPEN**。古い候補へ戻らず、HANDOFF指定の次候補から継続。
- GitHub全体検索で「パチスロ鉄拳3rd」の既存レコードがないことを確認後、829件目として新規追加。

## 今回追加 — パチスロ鉄拳3rd

### identity / 性能コア

- manufacturer: **山佐**。
- hall start: **2014-07-07**。HAZUSE、パチ＆スロ必勝本、パチ7で一致。
- formalModelName: **パチスロ鉄拳3EE**。
- inspectionNumber: **4S0216**。
- generation/system: **5号機 / AT / 疑似ボーナス / CZ / ゲーム数天井 / TAGゲームシステム**。
- payoutRate: **97.5 / 99.1 / 101.1 / 105.8 / 108.9 / 112.0%**。
- AT初当たり: **1/351.0 / 1/331.8 / 1/322.0 / 1/291.2 / 1/279.8 / 1/257.9**。
- baseGamesPer50: **約31G**（パチマガスロマガ旧機種ページ。単一当時解析値）。
- AT「鉄拳RUSH」: **30拳（30G）+α、約2.8枚/G**。
- 鉄拳BONUS: **20G**、AT中約 **1/12** で抽選。
- 神鉄拳RUSH / 神鉄拳BONUS: **83.6%ループ**。
- 通常最大天井: **777G+前兆**。
- coreStatus: **COMPLETE_CORE**。

## パチスロ鉄拳3rd — resetBehavior v0.7

- settingChangeBehavior: 当時解析で **天井内部G RESET / モード再抽選 / 状態再抽選 / 滞在ステージランダム**。
- gameCounterReset: 設定変更 **RESET_CONFIRMED**。据え置きは前日からの内部Gを加味した前兆位置・500G超挙動から **CARRYOVER_SUPPORTED_BY_PERIOD_ANALYSIS**。
- ceilingAfterReset: **500G+前兆**。通常777G+前兆から短縮。
- carryOverBehavior: 据え置き時の内部ゲーム数引継ぎは当時変更判別解析が支持。ただしモード/状態保持契約そのものは **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleBehavior: 設定変更なし電源OFF→ONは本機固有の直接契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- modeAfterReset: **RESELECT_CONFIRMED**。オリジナル版の設定別リセットモード振り分け表は十分な再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- stateAfterReset: **RESELECT_CONFIRMED**。具体振り分けは **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits: **500G+前兆への天井短縮**、朝一100/200/300G台ゾーン強化の当時実践観測あり。
- resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: 朝一内部90～110Gで鉄拳ZONEなら変更可能性上昇。90Gより前や前日Gを加味した通常ゾーン位置での前兆は据え置き材料。当日表示500G以上ハマりはリセット500G天井と矛盾するため据え置き判別材料。内部500G超でリバースロック発生率約20倍も補助材料。
- ガックン: オリジナル版固有の高信頼契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- publicMorningNumbers: リセット後 **500G+前兆**。新台初日・初回初当たり **n=353** の当時観測で、0G～平均 **1/261.7**、50G～平均 **1/218.3**、300G台当選率 **約50%**。観測値のため `PERIOD_OBSERVATIONAL` として分離。
- resetBehaviorQA: **PARTIAL**。

## safeguard / 再探索

- `パチスロ鉄拳3rd / 鉄拳3rd / 鉄拳3 / パチスロ鉄拳3EE / 山佐 / 4S0216` と `設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 777G / 500G / 短縮 / モード / 状態 / ガックン / 前兆 / リバースロック / 50枚 / 1000円` を組み合わせて再探索。
- 山佐公式アーカイブ、グリーンべると、HAZUSE、P-WORLD、パチマガスロマガ、パチ7、パチ＆スロ必勝本、当時リセット解析を横断。
- 検索で大量に混入する **2016年「鉄拳3rd エンジェルVer.」は別型式・別スペック**。同機の設定変更時モード振り分けや75%/25%状態振り分けを2014年オリジナル版へ流用していない。
- 電源OFF→ON契約は据え置き挙動から推測転記せずUNVERIFIEDを維持。

## 2014-07-07群 / 次候補

- K-Navi 2014年7月全国一斉導入カレンダーで07-07のパチスロは **まじかる☆タルるートくん / 鉄拳3rd / パチスロ サイボーグ009 / 娘娘娘** の4機を確認。
- No.828 **まじかる☆タルるートくん**、No.829 **鉄拳3rd**まで処理済み。
- 07-07群はまだ **OPEN**。
- 次の明確な未処理は三洋物産 **「パチスロ サイボーグ009」**。その後、岡崎産業 **「娘娘娘」**を処理し、他メーカー/資料系統を横断して07-07群をCLOSED判定する。

## 遡及 resetBehavior QA

- 直前handoffからQAカーソルを維持。
- 次QAカーソル: `docs/real_machine_db/machines/2007-02-18_kagaku-ninjatai-gatchaman.md`。
- 新規時系列収集を止めず、余力のあるリレーで既存PARTIALへv0.7を遡及する。

## 次回再開地点

1. **recordCount 829 / chronologicalFrontier 2014-07-07 / 07-07_GROUP_OPEN** から開始。
2. 最新mainで README / mission / INDEX / LATEST_HANDOFF / 829件目を再確認。
3. 最初の未処理は **パチスロ サイボーグ009（三洋物産）**。
4. 続いて **娘娘娘（岡崎産業）**。未処理を飛ばさず同日群を閉じられるだけ全メーカー監査する。
5. 07-07群CLOSED後、K-Navi上の次の全国一斉導入アンカー **2014-07-22**へ進む。ただし07-08～07-21も別資料で境界監査してから前進する。
6. 遡及QAは `docs/real_machine_db/machines/2007-02-18_kagaku-ninjatai-gatchaman.md` から再開。
7. 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意は維持。

## 主要出典 — 取得日 2026-09-07

### パチスロ鉄拳3rd
- 山佐ネクスト公式: `https://yamasa-next.co.jp/model_tk3/`
- グリーンべると / P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/6538/greenbelt`
- HAZUSE: `https://hazuse.com/machine/pachislot/4S0216/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7424`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/198/a.php`
- パチマガスロマガ 50枚G: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/198/c.php`
- パチ＆スロ必勝本: `https://p.hisshobon.jp/machine/2414/1/46972`
- パチ7 天井: `https://pachiseven.jp/machines/4155/cutout/78`
- スロパチクエスト 朝一判別: `https://www.slopachi-quest.com/article/tekken3-reset-act/`
- 期待値見える化 朝一実践値: `https://slotjin.com/slot/tekken3rd-morning/`
- スロパチクエスト リセット実践値: `https://www.slopachi-quest.com/article/tekken3rd-reset/`

### 07-07同日群
- K-Navi 2014年7月新台導入カレンダー: `https://p-kn.com/calendar/201407/`
