# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前は **292 `イルカ夫人（新妻イルカ夫人）`（アビリット / 2008-09-08）**。
- 今回、同日未処理本線 **293 `パチスロ24 -TWENTY FOUR-`（大都技研 / 2008-09-08導入開始予定）** を追加。
- 性能コア + ミッションv0.7 `resetBehavior` を同時収集。

## 293. パチスロ24 -TWENTY FOUR-

- record: `docs/real_machine_db/machines/2008-09-08_pachislot_24_twenty_four.md`
- manufacturer: 大都技研
- modelName: `TWENTY FOUR4`
- generation: 5号機
- systemType: ボーナス+CZ+完走型RT
- releaseDate: **2008-09-08**。パチ＆スロ必勝本の「9/8導入開始予定」を採用し、グリーンべるとの「9月上旬納品予定」と照合。
- 設定体系: **1 / 3 / 5 / 6**。
- BIG合算: **1/394.80 → 1/296.54**。
- MIDDLE: **1/655.36 → 1/560.14**。
- ボーナス合算: **1/246.38 → 1/193.89**。
- 50枚ベース: **33.20 / 33.50 / 33.81 / 35.11G**。
- BIG約240枚、MIDDLE約90枚。
- BB後の完走型RT「リアルタイムゾーン」は100Gと300Gの双方を持つ。MIDDLE後は24Gの「24チャンスタイム」から特殊リプレイ成立で100G RTへ突入。
- RT純増は当時グリーンべると **約+0.8〜0.9枚/G**、K-Navi **約+0.7〜0.8枚/G** で差があるため `CONFLICT_RT_NET_INCREASE`。
- 機械割も必勝本 **97.27/100.40/103.13/109.85%**、パチマガスロマガ **96.88/100.56/103.40/111.15%**、5号機クロニクル **97.3/100.4/103.1/109.9%** の系列差があるため平均せず `CONFLICT_PAYOUT_RATE`。
- 100G/300G RTの内部遷移説明も、業界記事と当時5号機wikiで表現方向が異なるため `CONFLICT_RT_100_300_MECHANISM_DESCRIPTION` として保持。

### resetBehavior（293）

- `settingChangeBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 設定変更時のCZ/100G・300G RT内部状態処理を本機固有資料で確定できず。
- `carryOverBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 据え置き時のCZ/RT残状態引継ぎを直接確定できず。
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 電源OFF→ONのみの場合のCZ/RT状態を直接確定できず。
- `gameCounterReset`: `NOT_APPLICABLE_OR_NONE_CONFIRMED` — 通常ゲーム数到達型天井は今回確認できず、朝一比較用の公開天井カウンタなし。
- `ceilingAfterReset`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `modeAfterReset`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `stateAfterReset`: `UNVERIFIED_AFTER_RESEARCH` — CZ/完走型RT中の変更・据え置き・電断処理を一般論で補間しない。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- `resetBenefits`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetDetection`: `UNVERIFIED_AFTER_RESEARCH` — `パチスロ24 / 24-TWENTY FOUR / TWENTY FOUR4 / 大都技研` と設定変更・リセット・朝一・据え置き・電源OFF ON・ガックン・初期出目・変更判別・RTを組み替え、当時解析/業界記事/旧DB/回顧資料を横断したが、本機固有の判別条件を確定できず。
- `numericResetData`: 朝一専用当選率、リセットモード振り分け、短縮天井、変更時専用恩恵発生率はいずれも `NONE_CONFIRMED_AFTER_RESEARCH`。

## 今回の主要出典

取得日: 2026-09-02

- https://p.hisshobon.jp/machine/1200/1/18160
  - 9/8導入開始予定、設定別BIG/MID/合算、シミュレート機械割。
- https://p-kn.com/slot/849/6637/
  - 設定別ボーナス確率を再照合。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/42/h.php
  - パチマガスロマガの設定別ボーナス確率と別PAYOUT系列。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/42/c.php
  - 50枚あたり33.20/33.50/33.81/35.11G。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/42/a.php
  - BIG/MIDDLE獲得性能・払い出し条件、CZ+完走型RT。
- https://web-greenbelt.jp/00003787/
  - 当時業界記事。型式TWENTY FOUR4、BB約240枚/MB約90枚、100G/300G RT、MB後24G CZ、RT純増約0.8〜0.9枚/G、9月上旬納品予定。
- https://p-kn.com/slot/849/
  - BIG/MIDDLE払い出し条件、100G完走型RT、RT純増約0.7〜0.8枚/G。
- https://w.atwiki.jp/5gouki/pages/120.html
  - 当時更新の100G/300G RT内部遷移説明。
- https://5goki.com/daito
  - 2008年9月導入、回顧機械割系列。

## 境界監査・重複防止

- **既存293件の再追加禁止。**
- 2008-09-08同日群は `イルカ夫人` と `24 -TWENTY FOUR-` まで登録済み。
- `ザ・ブルーハーツG` は旧追跡資料上、通常版とは別に9月へ変更された痕跡があるため、実販売/型式/通常版との差分を次回境界監査で再確認する。
- `メガラニカDX` は検定通過痕跡のみで、実販売/ホール導入裏付け未確定のため `INSPECTION_ONLY_CANDIDATE_NOT_MAINLINE` を維持。
- `シオサイV-30` は2008-11-03納品開始予定が確認済みのため11月まで保留。
- `完熟チェリー` は2008年10月境界で再確認。
- 検定通過日だけを導入日として扱わない。

## resetBehavior 遡及QA

- 最終補完済み地点 `球児（2006-09）` を維持。
- 2006年ヤーマ `ジャックポット トロピカルバージョン` の実ファイル同定問題は未解消。2017年 `Ver.2` と混同しない。
- 新規収集本線を止めない。

## 次回再開地点

1. **LATEST_HANDOFF基準293件地点。具体日付き本線は2008-09-08まで進行。**
2. 次は **2008-09-09〜15境界を再監査**。`ザ・ブルーハーツG / チキチキボカン / 漁師・網平 / タワラカワラ` 等に9/16より前の具体発売・納品日がないか、旧業界追跡・当時業界記事・解析DBで確認する。
3. 9/15以前の未処理本線が確認できなければ、当時K-Naviで **2008-09-16ホール導入予定** が明確な `キャッツ・アイ`（オリンピア）を次に処理する。
4. その後 `怒濤の剣` はグリーンべるとで **2008-09-21納品開始予定** が確認済み。時系列を守って差し込む。
5. resetBehaviorは新規機種ごとに設定変更/据え置き/電源OFF→ON/ゲーム数・天井/モード・状態/有利区間/朝一恩恵・不利/変更判別/公開朝一数値を確認し、RT/ART状態は一般論で補間しない。
