# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **313 `鬼火`（ニューギン / 2008-11-24）**。
- **314 `サイサイ`（北電子 / 型式 サイサイ5）** を追加。
- 当時グリーンべるとで **2008-11-24納品開始**、北電子公式検定情報で正式型式 `サイサイ5` を確認。
- 性能コア + v0.7 `resetBehavior` を同時収集。設定別ボーナス確率、機械割、50枚ベース、基本獲得性能、BIG後100G RTまで保存。
- パチマガスロマガのPAYOUTは **白ST中フル攻略シミュレート 99.15〜112.38%**、P-WORLD/5号機クロニクル系列は **96.29〜107.13% / 96.3〜107.1%**。攻略条件が異なる可能性が明示されるため平均せず別系列保持。
- 設定6青7BIGはパチマガスロマガ **1/512.00**、P-WORLD **1/521.0** で明確に競合するため `CONFLICT`。
- RT純増/Gと設定変更/据え置き/電源OFF→ON時のRT残G・状態処理、ガックン等の変更判別は十分な再探索後も本機固有の直接資料を回収できず `UNVERIFIED_AFTER_RESEARCH`。

## 314. サイサイ

- record: `docs/real_machine_db/machines/2008-11-24_saisai.md`
- manufacturer: 北電子
- modelNumber: `サイサイ5`（北電子公式検定情報）
- releaseDate: **2008-11-24（当時業界記事の納品開始）**
- generation: 5号機
- systemType: ボーナス + BIG後100G RT / 液晶 + GOGO!ランプ告知。
- 青7BIG（解析）: **1/606.81 / 1/585.14 / 1/564.97 / 1/546.13 / 1/528.52 / 1/512.00**。
- 白7 SAIsai TIME: **1/292.57 / 1/277.69 / 1/256.00 / 1/240.94 / 1/224.44 / 1/204.80**。
- 合算: **1/197.40 / 1/188.32 / 1/176.17 / 1/167.18 / 1/157.54 / 1/146.29**。
- 50枚ベース: **36.81G/50枚（全設定共通）**。
- 青7BIG: 当時業界記事平均約**309枚**、解析約**312枚**。規定は345枚超払い出し終了。
- 白7 SAIsai TIME: 当時記事平均約**188枚**、解析は技術介入時**MAX203枚**。規定239枚超払い出し終了。
- 青7BIG後: **100Gまたはボーナス成立までRT**。BIGを引き続ける限りRTループ。
- RT純増/G: `UNVERIFIED_AFTER_RESEARCH`。
- `coreStatus: COMPLETE_CORE_WITH_RT_NET_INCREASE_UNVERIFIED`。

### 機械割・確率CONFLICT（314）

- パチマガスロマガ（白ST中フル攻略シミュレート）: **99.15 / 101.11 / 103.83 / 106.18 / 108.91 / 112.38%**。
- P-WORLD: **96.29 / 97.92 / 100.23 / 102.14 / 104.33 / 107.13%**。
- 5号機クロニクル: **96.3 / 97.9 / 100.2 / 102.1 / 104.3 / 107.1%**でP-WORLD系列と整合。
- 攻略条件/算出条件を一律化せず別系列で保持。
- 設定6青7BIGのみ、解析 **1/512.00** 対 P-WORLD **1/521.0**。平均化禁止。

### resetBehavior（314）

- `settingChangeBehavior`: `UNVERIFIED_AFTER_RESEARCH`。サイサイ/SAIsai/サイサイ5、北電子と設定変更・リセット・朝一・RT・100Gを組み替え再探索したが、本機固有の直接本文を回収できず。
- `carryOverBehavior`: `UNVERIFIED_AFTER_RESEARCH`。通常G数天井は確認なし。BIG後RT状態の翌日据え置き処理は未確定。
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH`。単純電断でのRT状態/表示/初期出目処理は未確定。
- `gameCounterReset`: `NOT_APPLICABLE_OR_NONE_CONFIRMED_AFTER_RESEARCH`。通常時G数到達型天井/周期なし。RT残Gの変更・電断時処理は未確定。
- `ceilingAfterReset`: `NONE_CONFIRMED_AFTER_RESEARCH`。通常天井/リセット短縮天井なし。
- `modeAfterReset`: `NONE_CONFIRMED_AFTER_RESEARCH`。朝一専用モード/変更時モード振り分けなし。
- `stateAfterReset`: `UNVERIFIED_AFTER_RESEARCH`。BIG後100G RT中の設定変更/電断処理未確定。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- `resetBenefits`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetDetection`: `UNVERIFIED_AFTER_RESEARCH`。ガックン/初期出目/据え置き判別を本機固有で確定できず。他の北電子機から転記しない。
- `numericResetData`: 通常のBIG後RT **100G or bonus**。リセット固有の短縮G数・モード振り分け・朝一当選率は `NONE_CONFIRMED_AFTER_RESEARCH`。

## 314主要出典

取得日: 2026-09-02

- https://web-greenbelt.jp/00003853/ — 2008-11-24納品開始、BIG平均309枚、BIG後100G/ボーナスまでRT、SAIsai TIME平均188枚、GOGO!ランプ/液晶。
- https://www.kitadenshi.co.jp/slot-kentei/saisai/ — 北電子公式。正式型式 `サイサイ5`、2008年9〜10月の各地検定公示。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/68/h.php — 設定別青7BIG/白7ST/合算、白ST中フル攻略シミュレートPAYOUT。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/68/c.php — 1000円あたり36.81G、全設定共通。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/68/a.php — RT/同時成立、BIG後100G RT、青7BIG約312枚、白7ST MAX203枚、規定払い出し。
- https://www.p-world.co.jp/machine/database/5372 — 設定別確率、出玉率96.29〜107.13%、規定払い出し。設定6BIGは解析値と競合。
- https://5goki.com/kitac — 2008年11月導入、機械割96.3〜107.1%の第二照合。

## 境界監査・重複防止

- **既存314件の再追加禁止。**
- `鬼火` と `サイサイ` はともに2008-11-24納品予定/開始で処理済み。
- `パンダーゼット`（ラスター）はP-WORLD掲示板に **2008-11-14時点で「新装初日」実戦の投稿**が残り、少なくとも11月24日より前に実導入済みだった可能性が高い。P-WORLD/5号機クロニクルは導入月2008-11、型式 `パンダーゼットA` までは確認できるが、全国納品開始の具体日は未確定。時系列漏れ防止のため次回最優先監査。
- `海遊記` はベルコ公式で **2008年11月登場**まで確認。具体納品/導入日未確定。
- `ぱちスロSTゴジラ` / `ぱちスロST行け!稲中卓球部` は2008-12-08候補、`HAIBいちろう` は2008-12-15候補として11月列へ混入させない。

## 次回再開地点

1. **LATEST_HANDOFF基準314件地点。まず `パンダーゼット`（ラスター / 型式パンダーゼットA）の11月具体導入日を再監査する。** 2008-11-14実戦投稿が残るため、11月24日より前の漏れなら遡及追加を優先。
2. `パンダーゼット` は設定1/3/5/7のボーナス合算 **1/277.69 / 1/268.59 / 1/262.14 / 1/258.02**、3種ボーナス各約120枚、ART30G約+1.2枚/G / 300G約+1.5枚/G、95%ループ構造まで既存資料で確認済み。機械割・50枚ベース・resetBehaviorを横断再探索する。
3. 次に `海遊記`（ベルコ公式2008年11月登場）の具体導入日を詰め、11月24日以前なら遡及。続いて `モンキーモンキー` / `ハネスロナイツ` / `バックトゥザフューチャーデラックス` 等の11月境界候補を監査する。
4. `サイサイ` のRT純増と変更/据え置き/単純電断時RT状態は将来当時攻略アーカイブ本文が取れた場合QAで信頼度を上げる。
5. resetBehavior遡及QAは別QAリレーで2006-09群を継続する。
