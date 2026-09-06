# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **825**
- latestRecordAdded: **餓狼伝説PREMIUM**（SNKプレイモア）— 2014-06-02
- latestRecord: `docs/real_machine_db/machines/2014-06-02_garou-densetsu-premium.md`
- chronologicalFrontier: **2014-06-02**
- frontierLatestMachine: **餓狼伝説PREMIUM**
- schema: **resetBehavior v0.7**
- status: **2014-06-02_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、824件目 `2014-06-02_sengoku-otome-saigoku-sansen.md` を再読。
- INDEXは19件表記の旧集約状態。README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として継続。
- 作業開始時の正本は **824件 / 2014-06-02 / 06-02_GROUP_OPEN**。
- 06-02同日群は、具体日を安全に固定済みの **ケロット3 / 戦国乙女～剣戟に舞う白き剣聖～西国参戦編 / 餓狼伝説PREMIUM** をすべて処理済み。
- `2014年6月2日 / 2014-06-02 / パチスロ / 導入`、K-Navi、HAZUSE、当時業界資料、後年年表を再監査し、追加の安全な具体日付き未登録5号機を今回固定できなかったため **06-02群をCLOSED_FOR_CURRENT_RESEARCH** とした。

## 今回追加 — 餓狼伝説PREMIUM

### identity / 性能コア

- manufacturer: **SNKプレイモア**。
- formalModelName: **ガロウデンセツプレミアムBB**。
- inspectionNumber: **4S0203**。
- hall start: **2014-06-02**。
- generation/system: **5号機 / AT特化 / 規定ゲーム数 + CZ + レア役解除 / 継続率・セット数・ゲーム数上乗せ**。
- AT初当たり: **1/298.9 / 1/290.0～290.1 / 1/273.4 / 1/255.4 / 1/226.8 / 1/205.5**。
- baseGamesPer50: **約30G/50枚**（パチマガスロマガ）。
- AT「餓狼RUSH」: **純増約2.8枚/G、1セット30/50/100G + 継続バトル、継続率50～90%**。
- maximum ceiling: **AT間993G + 前兆**。333/555/777/990～993Gに規定ゲーム数振り分け、天国/超天国は90～93G。
- coreStatus: **COMPLETE_CORE**。

### payout CONFLICT

- HAZUSE: **96.9 / 98.6 / 99.9 / 103.8 / 108.4 / 113.5%**。
- パチ＆スロ必勝本: **97.2 / 98.9 / 100.3 / 104.2 / 108.9 / 114.0%**。
- 全設定で差があり単純な小数表示丸めだけでは説明しきれないため、平均せず `CONFLICT_PAYOUT_RATE` として双方を保存。

## 餓狼伝説PREMIUM — resetBehavior v0.7

- settingChangeBehavior: **AT間天井G RESET**。設定変更時は通常Cまたは天国へ再抽選。
- modeAfterReset 公開値:
  - 設定1～3: 通常C **90.0%** / 天国 **10.0%**
  - 設定4: 通常C **87.5%** / 天国 **12.5%**
  - 設定5: 通常C **85.0%** / 天国 **15.0%**
  - 設定6: 通常C **80.0%** / 天国 **20.0%**
- 天国/超天国の規定G: **90～93G（各25%）**。
- carryOverBehavior: 実戦資料で、前日G + 当日Gが994G付近となる当選を据え置き天井として扱う観測があり、天井進捗CARRYOVERを `PERIOD_OBSERVATIONAL_SUPPORT` として保持。
- powerCycleBehavior: 設定変更なし電源OFF→ONのAT間G・モード・内部状態は本機固有の直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- stateAfterReset: 通常/高確/超高確等の開始状態振り分けは `UNVERIFIED_AFTER_RESEARCH`。
- ceilingAfterReset: 固定のリセット専用短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。天国選択時90～93Gはモード恩恵として別管理。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetDetection: ガックン等の高信頼な本機固有変更判別は `NONE_CONFIRMED_AFTER_RESEARCH`。
- publicMorningNumbers: **天国10/12.5/15/20%（設定帯別）、90～93G各25%**。
- resetBehaviorQA: **PARTIAL**。

## 再探索 / safeguards — 餓狼伝説PREMIUM

- `餓狼伝説PREMIUM / 餓狼伝説プレミアム / ガロウデンセツプレミアムBB / 4S0203 / SNKプレイモア` に `設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / モード / 天国 / 93G / ガックン / 50枚` を組み合わせて再探索。
- HAZUSE、K-Navi、パチマガスロマガ、パチ＆スロ必勝本、グリーンべると、2014年当時のゾーン/朝一解析、後年実戦を横断。
- 旧作「餓狼伝説」や別タイトル「牙狼」系を混入しない。
- 純電断、据え置き時のモード/高確状態、ガックン判別は十分な再探索後も直接固定できず推測しない。

## 2014-06-02群 / 次境界

処理済み:
1. **ケロット3**（山佐）— No.823
2. **戦国乙女～剣戟に舞う白き剣聖～西国参戦編**（オリンピア）— No.824
3. **餓狼伝説PREMIUM**（SNKプレイモア）— No.825

- 06-02群は **CLOSED_FOR_CURRENT_RESEARCH**。
- 次回は **2014-06-03～06-15境界監査**から開始し、漏れがなければ既知アンカー **2014-06-16「パチスロ蒼天の拳2」**へ前進する。
- 2014-06-09配信の「蒼天の拳2」体験アプリ資料は「ホール導入前」と明記しており、06-09を実機導入日へ誤転記しない。

## 遡及 resetBehavior QA — 仮面ライダーDX〜走れ！スーパーバイク編

- `docs/real_machine_db/machines/2007-02-18_kamen-rider-dx-super-bike.md` を再QA。
- 既存 `coreStatus: COMPLETE_CORE` は維持し、性能完了判定を崩していない。
- v0.7として `schemaVersion`、`resetQaLastUpdated`、`publicMorningNumbers` を明示。
- 設定変更/据え置き/純電断時のライダータイム内部状態・残ナビ回数処理を、当時業界、旧攻略、K-Navi、古い解析、回顧で再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH` を維持。
- 通常時ボーナス天井は確認されず、RT最大2000GはRT規定ゲーム数のため、ゲーム数天井リセットは `NOT_APPLICABLE_NO_NORMAL_CEILING_CONFIRMED`。
- ガックン等の設定変更判別・朝一専用公開数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- パチ7回顧で液晶右端ライダーの点滅速度が残ナビ回数を示唆する通常仕様を再確認したが、これは設定変更判別ではないためresetDetectionへ誤転用しない。
- resetBehaviorQA: **PARTIAL**。

### 次QAカーソル

- Git履歴上、仮面ライダーDX追加後の次の実機追加は `a72eac99...` の **科学忍者隊ガッチャマン**。
- 次QAカーソル: `docs/real_machine_db/machines/2007-02-18_kagaku-ninjatai-gatchaman.md`。

## 次回再開地点

1. **recordCount 825 / chronologicalFrontier 2014-06-02 / 06-02_GROUP_CLOSED_FOR_CURRENT_RESEARCH** から開始。
2. 最新mainで README / mission / INDEX / LATEST_HANDOFF / 825件目を再確認。
3. **2014-06-03～06-15境界監査**を実施。
4. 追加未処理機がなければ **2014-06-16「パチスロ蒼天の拳2」**を次候補として性能コア + v0.7 resetBehaviorを収集。
5. 遡及QAは `docs/real_machine_db/machines/2007-02-18_kagaku-ninjatai-gatchaman.md` から再開。
6. 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意は維持。

## 主要出典 — 取得日 2026-09-07

### 餓狼伝説PREMIUM
- HAZUSE: `https://hazuse.com/machine/pachislot/4S0203/`
- HAZUSE 基本スペック: `https://hazuse.com/machine/pachislot/4S0203/genre/201/`
- HAZUSE AT/ART・モード移行: `https://hazuse.com/machine/pachislot/4S0203/genre/209/`
- K-Navi: `https://p-kn.com/slot/2049/`
- パチ＆スロ必勝本: `https://p.hisshobon.jp/machine/2406/1/46189`
- パチマガスロマガ 基本: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/48/a.php`
- パチマガスロマガ 小役/50枚: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/48/c.php`
- パチマガスロマガ AT突入フロー: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/48/l.php`
- グリーンべると: `https://web-greenbelt.jp/00006164/`
- 期待値見える化 天井/ゾーン: `https://slotjin.com/zone/garoudensetsu-premium/`
- 期待値見える化 朝一: `https://slotjin.com/zone/garoudensetsu-premium-morning/`

### 仮面ライダーDX QA
- パチ7回顧: `https://pachiseven.jp/articles/detail/9576`
- グリーンべると: `https://web-greenbelt.jp/00003982/`
- パチマガスロマガ旧攻略: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/102/a.php`

### 次候補 / 境界
- 4Gamer 蒼天の拳2体験アプリ（2014-06-09、ホール導入前と明記）: `https://www.4gamer.net/games/260/G026023/20140609052/`
