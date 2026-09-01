# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前は **294 `キャッツ・アイ`（オリンピア / 2008-09-16）**。
- 今回、2008-09-17〜20境界を再監査後、当時業界一次資料で具体納品日が確認できる次本線 **295 `怒濤の剣`（ミズホ / 2008-09-21納品開始予定）** を追加。
- 性能コア + ミッションv0.7 `resetBehavior` を同時収集。

## 295. 怒濤の剣

- record: `docs/real_machine_db/machines/2008-09-21_dotou_no_tsurugi.md`
- manufacturer: ミズホ
- modelName: 正式型式は高信頼資料で未確定。後年資料に `ドトウノツルギ2` 候補があるが正式値へ昇格せず。
- generation: 5号機
- systemType: ボーナス+周期CZ+ART/RTループ
- releaseDate: **2008-09-21**。2008-08-21付グリーンべるとが「納品は9月21日開始予定」と明記。ユニバーサル現公式は発売2008年9月まで照合。
- 設定体系: **1 / 4 / 6 / H**。当時5号機まとめwikiのみ最高設定をF表記するため `CONFLICT_SETTING_TOP_LABEL_H_VS_F`。対応数値は同一系列。
- BIG合算: **1/455.11 → 1/381.02**。
- CAESAR CHANCE(REG): 全設定 **1/712.35**。
- ボーナス合算: **1/277.69 → 1/248.24**。
- 機械割: **97.9 / 102.8 / 109.5 / 112.3%**。P-WORLD、回顧DB、当時系資料で一致。
- BIG約308枚、CAESAR CHANCE約107枚。
- ART/RT「バトルゲーム」は前半ART→20G固定RTをループ。平均約50G/セット、約**+0.6枚/G**、ループ率最大99%。
- 通常ゲーム80G消化ごとにCZへ入り、**CZ18回通過で次回ボーナスまで継続する天井ART**。バトルゲーム中はこのカウントが一時停止。
- 50枚ベースは機種名表記揺れ・型式候補・50枚/1000円/ベース/コイン持ちまで変えて再探索したが直接値を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 5号機クロニクルの怒濤の剣欄には約204枚/48枚・剣RUSH等、他機種と思われる内容混入があるため今回の根拠から除外。

### resetBehavior（295）

- `settingChangeBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 設定変更時の80G周期CZ進行/18回天井カウンタ、ナイトモード等内部状態、バトルゲーム継続権利・ART/RT状態の処理を本機固有資料で確定できず。
- `carryOverBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 据え置き時の周期CZ回数/天井、内部状態、継続権利の引継ぎを直接確定できず。
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 電源OFF→ONのみの場合の周期CZ/天井・ART/RT・継続権利処理を直接確定できず。
- `gameCounterReset`: `UNVERIFIED_AFTER_RESEARCH` — 80G周期CZ×18回の通常天井は確定したが、設定変更時の初期化・据え置き/電断時引継ぎは一般論で補間しない。
- `ceilingAfterReset`: `UNVERIFIED_AFTER_RESEARCH` — リセット専用短縮周期・短縮天井・朝一専用天井数値は確認できず、通常カウンタ初期化有無も直接資料未確認。
- `modeAfterReset`: `UNVERIFIED_AFTER_RESEARCH` — ナイトモード等は確認済みだが設定変更時の再抽選/引継ぎ、朝一専用モード振り分けは未確定。
- `stateAfterReset`: `UNVERIFIED_AFTER_RESEARCH` — CZ、ART/RT「バトルゲーム」、ナビ/継続権利の変更/据え置き/電断処理を一般論で補間しない。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- `resetBenefits`: `NONE_CONFIRMED_AFTER_RESEARCH` — 通常80G周期CZ×18回天井以外の朝一/設定変更専用恩恵は確認なし。
- `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetDetection`: `UNVERIFIED_AFTER_RESEARCH` — `怒濤の剣 / 怒涛の剣 / ドトウノツルギ2 / ミズホ` と設定変更・リセット・朝一・据え置き・電源OFF ON・周期CZ・天井・ガックン・初期出目・変更判別・バトルゲームを組み替え、当時解析/P-WORLD/旧wiki/回顧資料を横断したが本機固有条件を確定できず。
- `numericResetData`: 通常CZ周期 **80G**、通常天井 **CZ18回**は記録。リセット天井、朝一モード振り分け、朝一特定G数当選率、リセット恩恵率は `UNVERIFIED/NONE_CONFIRMED_AFTER_RESEARCH`。

## 今回の主要出典

取得日: 2026-09-02

- https://www.universal-777.com/product/slot/dotouno_tsurugi/
  - ユニバーサル公式。ミズホ、5号機、ボーナス+ART、発売2008年9月、押し順ナビ型バトルゲーム。
- https://web-greenbelt.jp/00003760/
  - 2008-08-21付当時業界記事。2008-09-21納品開始予定、BIG平均308枚、CAESAR CHANCE平均107枚、最大99%ループの押し順ART+AT。
- https://www.p-world.co.jp/machine/database/5303
  - 設定別青7BIG/赤7BIG/REG/合算/機械割、約+0.6枚/G、RT20G、平均約50G、80G周期CZ、18回天井ART、カウント一時停止、ナイトモード。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/29/a.php
  - パチマガスロマガ。RT/ART延命、天井ART、BIG約308枚/REG約107枚、最高99%バトルゲーム。
- https://w.atwiki.jp/5gouki/pages/127.html
  - 2008-09-25時点の旧5号機資料。周期CZ18回天井、RTツインループ、設定別確率/機械割。最高設定F表記の競合根拠。
- https://pachinko.hatenablog.jp/entry/2008/09/dotou-no-tsurugi
  - 設定1/4/6/HのBIG・合算・機械割、2008年9月。
- https://pacnk.com/slot/tools/sh_dotounoken.html
  - 設定1/4/6/HのBIG・機械割を再照合。

## 境界監査・重複防止

- **既存295件の再追加禁止。**
- 2008-09-17〜20について `チキチキボカン / タワラカワラ / ザ・ブルーハーツG` を具体日で再監査したが、9/20以前の実販売/ホール導入を直接確定できる未処理本線は今回確認できず。
- `チキチキボカン` は2008-06-20型式試験適合・2008年9月一覧への収録、P-WORLD機種DBまで確認したが具体導入日は未確定。次回以降も当時全日遊連/オーイズミ/ホール導入記録を優先再探索。
- `タワラカワラ` は複数回顧DBで2008年9月導入、検定通過は2007-12-25と確認。ただし具体販売/導入日は未確定。検定日を導入日にしない。
- `ザ・ブルーハーツG` は通常版との同一性/型式差未解消のため、別機種としての実販売根拠が取れるまで本線追加しない。
- `漁師・網平` は2007-07-22納品の既知機種であり2008年9月一覧から再追加しない。
- `シオサイV-30` は2008-11-03納品開始予定が確認済みのため11月まで保留。
- `完熟チェリー` は2008年10月境界で再確認。

## resetBehavior 遡及QA

- 最終補完済み地点 `球児（2006-09）` を維持。
- 2006年ヤーマ `ジャックポット トロピカルバージョン` の実ファイル同定問題は未解消。2017年 `Ver.2` と混同しない。
- 新規収集本線を止めない。

## 次回再開地点

1. **LATEST_HANDOFF基準295件地点。具体日付き本線は2008-09-21まで進行。**
2. 次は **2008-09-22〜30境界を再監査**。`チキチキボカン / タワラカワラ / ザ・ブルーハーツG` について具体発売・納品・ホール導入日を旧業界追跡、当時全日遊連/メーカー記事、解析DB、ホール導入記録で確認する。
3. 同期間で別の未処理機が具体日付きで見つかれば、最古の日付から先に差し込む。
4. 9月末まで閉じられたら2008年10月境界へ進み、`完熟チェリー` を含む10月初旬群を具体日順に再構築する。
5. resetBehaviorは新規機種ごとに設定変更/据え置き/電源OFF→ON/ゲーム数・天井/モード・状態/有利区間/朝一恩恵・不利/変更判別/公開朝一数値を確認し、RT/ART状態は一般論で補間しない。
