更新日: 2026-09-09

## 現在地点
- recordCount: **1051**
- latestRecordAdded: **パチスロマジンガーZ 新たな魔神の力**（EXCITE / ニューギングループ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-02-20_mazinger-z-aratana-majin-no-chikara.md`
- chronologicalFrontier: **2017-02-20**
- frontierLatestMachine: **パチスロマジンガーZ 新たな魔神の力 — No.1051**
- schema: **resetBehavior v0.7**
- status: **2017-02-20_GROUP_CLOSED_FOR_CURRENT_RESEARCH / 2017-02-21_TO_2017-02-26_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1050実レコードを再取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおりINDEXより新しい `LATEST_HANDOFF.md` を直近進捗の正本として採用。
- 開始時mainは1050件 / 2017-02-20群OPEN、次カーソル `パチスロマジンガーZ 新たな魔神の力`。
- 調査中にmainへNo.1051レコードが並行追加されたことを検出。重複レコードは作成せず、追加済み実レコードを再取得して内容を監査し、そのまま正本として引き継いだ。
- performance coreとresetBehavior v0.7は今回の独立再探索でも整合。導入日だけは複数資料の2017-02-20とK-Naviの2017-02-06が競合するため平均・消去せずCONFLICTを維持。
- 2017-02-20群を全メーカー側から再監査。2-9伝説の同日パチスロ群は `ヱヴァンゲリヲン・勝利への願い / 宇宙戦艦ヤマト2199 / マジンガーZ 新たな魔神の力` で、3機とも登録済みとなったため現時点でCLOSED。
- 2017-02-21〜02-26境界も導入一覧・日付検索で全国導入パチスロ本線の追加候補を固定できず、現時点でCLOSED。次の既知大群は2017-02-27。

## No.1051 — パチスロマジンガーZ 新たな魔神の力
- manufacturer: **EXCITE / ニューギングループ**
- releaseDate canonical: **2017-02-20**
- releaseDate conflict: **2017-02-06（K-Navi）**
- formalModelName: **マジンガーZ新たな魔神の力Z**
- certificationNumber: **6S1014**
- generation/system: **5号機 / 5.5号機期 / A+ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.7 / 99.6 / 102.4 / 104.8 / 108.0 / 110.0%**。
- ボーナス合算: **1/362 / 340 / 317 / 294 / 299 / 286**。
- ART初当たり: **1/513 / 480 / 484 / 449 / 374 / 368**。
- Zボーナス: **1/1424.7 / 1191.6 / 1310.7 / 978.1 / 910.2 / 799.2**。
- デフォルメカバトル: **1/485.5 / 474.9 / 417.4 / 420.1 / 445.8 / 445.8**。
- 50枚ベース: **約31G/50枚**。
- ART「マジンガーラッシュ」単体純増: **約1.6枚/G**。ボーナス込み約1.8枚/G表記は定義分離。
- Zボーナス: **約246枚** / デフォルメカバトル: **約78枚** / ARTは1セット30G以上。

### resetBehavior v0.7
- 通常天井: **ボーナス&ART間999G**でART。最大32G前兆の解析あり。
- 設定変更: **天井ゲーム数RESET / 内部状態RESELECT**。
- 純電源OFF→ON: **天井ゲーム数CARRYOVER / 内部状態CARRYOVER**。
- 据え置き: 上記純電断直接比較と整合する形で主要進捗をCARRYOVER扱い。
- 設定変更時高確移行率: **設定1〜3 33.2% / 設定4〜6 50.0%**。
- 設定変更専用固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 朝一専用ゲーム数モード/モード振り分け: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 本機固有の確定的ガックン/初期出目/ランプ判別: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 純電断時の液晶ステージ・ARTストック等特殊状態: **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## dataQuality / conflicts
- performance coreはちょんぼりすた、すろぱちくえすと、Pachinavi等で相互照合。
- `CONFLICT_RELEASE_DATE_2017_02_20_VS_2017_02_06_KNAVI_OR_REGIONAL_EARLY` を保持。
- `CONFLICT_PAYOUT_RATE_SETTING2_99_6_VS_96_6_CRANKYSEVEN` を既存No.1051レコードどおり保持。99.6%は複数資料一致、96.6%はCrankySeven単独だが削除しない。

## 2017-02-20境界監査
- status: **CLOSED_FOR_CURRENT_RESEARCH**。
- 登録済み:
  - パチスロ 宇宙戦艦ヤマト2199 — No.1049
  - ヱヴァンゲリヲン・勝利への願い — No.1050
  - パチスロマジンガーZ 新たな魔神の力 — No.1051
- 2-9伝説の2/20群も上記3機を列挙。追加全国導入パチスロ本線は今回の横断監査で固定できず。

## 2017-02-21〜02-26境界監査
- status: **CLOSED_FOR_CURRENT_RESEARCH**。
- 日付別検索と2017導入一覧を横断したが、2/21〜2/26に追加すべき全国導入パチスロ本線は今回固定できなかった。
- 次の明確な全国導入群は **2017-02-27**。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-04-16_oniwa-de-don.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 次カーソル: `2006-04_bomberman-victory-f.md`。
- 新規本線を止めず、既存性能statusを不用意に崩さずresetBehavior欠損だけを順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1051を再取得。
2. **1051件 / chronologicalFrontier 2017-02-20 / 2/20群CLOSED / 2/21〜26境界CLOSED** を正本として継続。
3. 次の未処理本線は **2017-02-27群**。先頭既知候補 **No.1052候補 `パチスロ モンキーターンIII`（山佐）** の実導入日・型式を再固定して性能コア＋resetBehavior v0.7を収集。
4. 2/27同日全メーカーを必ず監査し、一覧だけでCLOSEDにしない。
5. 遡及QAは `2006-04_bomberman-victory-f.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1051 マジンガーZ 新たな魔神の力
- P-WORLD: https://www.p-world.co.jp/machine/database/8264
- ちょんぼりすた: https://chonborista.com/slot/newgin-slot/30654/
- すろぱちくえすと: https://www.slopachi-quest.com/article/mazingerz-majin/
- すろぱちくえすと機種まとめ: https://www.slopachi-quest.com/kisyubetsu/mazingerz-majin/
- Pachinavi: https://pachinavi.net/machines/mazinger-z/
- K-Navi 2017年2月導入カレンダー: https://p-kn.com/calendar/201702/
- 2-9伝説 2017導入一覧: https://29den.com/newslot/
- 楽スロ: https://rakuslo.com/mazingerz-tenjyo.html

### 次候補 / 境界
- 2-9伝説 2017導入一覧: https://29den.com/newslot/
- K-Navi 2017年2月導入カレンダー: https://p-kn.com/calendar/201702/
