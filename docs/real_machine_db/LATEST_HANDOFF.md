# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **572**
- latestMachineAdded: **雀龍桜花**（KPE / 2011-05-29納品開始予定）
- latestRecord: `docs/real_machine_db/machines/2011-05-29_janryu-ouka.md`
- chronologicalFrontier: **2011-05-29**
- frontierLatestExactDateMachine: **雀龍桜花**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、571前線レコード「ドラゴノーツ －ザ・レゾナンス－」を再取得して開始。
- `INDEX.md` は旧19件地点のため、README規約どおり最新 `LATEST_HANDOFF.md` と実machineレコードを進捗正本として使用。
- 571件地点から5/23〜5/28を境界監査し、具体日を確認できた最古未登録として2011-05-29納品開始予定「雀龍桜花」を572件目へ追加。
- KONAMI公式アーカイブは稼働開始2011年5月、グリーンべると当時記事は5月29日納品開始予定。日付定義は整合。

## 今回追加 — 572 雀龍桜花

- メーカー: **KPE**
- 導入キー: **2011-05-29（納品開始予定）**
- 5号機 / **A+ART / CZ / 天井ART**
- 機械割: **96.9 / 98.7 / 101.0 / 103.9 / 107.2 / 110.5%**
- BIG合成: **1/368.2 / 1/362.1 / 1/348.6 / 1/334.4 / 1/316.6 / 1/297.9**
- REG: **1/840.2 / 1/771.0 / 1/728.2 / 1/682.7 / 1/630.2 / 1/574.9**
- ボーナス合算: **1/256.0 / 1/246.4 / 1/235.7 / 1/224.4 / 1/210.7 / 1/196.2**
- ボーナス+ART合算: **1/169.4 / 1/154.4 / 1/154.6 / 1/136.1 / 1/131.4 / 1/119.9**
- ART「DRAGON RUSH」: **約+1.2枚/G**、初回 **40〜最大500G**
- BIG: **最大216枚** / REG: **約72枚**
- 通常天井: **ボーナス間1480G → 次回対局勝利確定でARTゲーム数獲得**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- ART単独初当たり全表: **UNVERIFIED_AFTER_RESEARCH**（ボーナス+ART合算から逆算しない）

### resetBehavior v0.7 — 572

- 旧解析資料と後年整理DBの双方で **設定変更後も1480G天井ゲーム数を引き継ぐ / クリアされない** と一致。
- `gameCounterReset`: **RETAIN_ON_SETTING_CHANGE_CONFIRMED**。
- `ceilingAfterReset`: **NO_SHORTENING_CONFIRMED / BASE_CEILING_1480G_RETAINED**。
- 朝一の主要要素は、設定変更でも前日天井進捗が失われないこと。専用高確・短縮天井等の追加恩恵は確認できず。
- 据え置き時のCZ/ART関連状態の厳密な保持、単純電源OFF→ON、変更時モード/状態、ガックン等の変更判別は表記揺れ・メーカー/シリーズ・reset系検索語を変え、公式、P-WORLD、パチマガ、旧解析、後年DBまで横断しても直接確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間: **NOT_APPLICABLE**。

## 主要出典 — 572（取得日 2026-09-04）

- KONAMI AMUSEMENT 機種アーカイブ: `https://www.konami.com/amusement/psm/archive/ps/2011/jyanryu_ouka/`
  - 稼働開始2011年5月、5号機ART
- グリーンべると/P-WORLD: `https://news.p-world.co.jp/articles/4587/greenbelt`
  - 2011-05-29納品開始予定、ART約+1.2枚/G、初回40〜500G
- P-WORLD機種DB: `https://www.p-world.co.jp/machine/database/6333`
  - BIG216枚、REG72枚、ART約+1.2枚/G、1480G天井
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/25/h-1.php`
  - BIG/REG/ボーナス合算/ボーナス+ART合算/PAYOUT全設定
- crankyseven: `https://crankyseven.com/sp/janryuouka-pc.htm`
  - 1480G天井、設定変更時に天井ゲーム数はクリアされない
- pacnk: `https://pacnk.com/slot/tools/sh_janryuouka.html`
  - 性能全表、設定変更後も天井ゲーム数を引き継ぐ

## 今回のGitHub更新

- 572: `docs/real_machine_db/machines/2011-05-29_janryu-ouka.md`
  - create commit: `9553f1527ba2f6540108a17519efb3f7d22624b9`
  - metadata correction commit: `3c71cc131db1a9e7e06578d19d30a14076ec518d`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのため重複QA対象外。
- QA済み範囲を推測では動かさず、怪胴王直後のmachine treeを実パス/日付順に直接確認して最初のresetBehavior欠損から再開する。

## 次回再開地点

1. **recordCount 572 / chronologicalFrontier 2011-05-29**。最新main README / mission / INDEX / LATEST_HANDOFF / 571・572レコードを再取得。
2. 2011-05-29同日群の残存と5/30境界を監査する。
3. 現時点の強い次候補は **2011-05-30「バリスタゴルフ」ホール導入予定**。P-WORLDで5号機ART・純増約+1.3枚/G・BIG約210枚・REG約56枚を確認済み。当時プレイグラフ転載にはホール導入予定5月30日とある。repo重複確認後、未登録なら573件目へ進める。
4. 6月群へ進む前に5月末の未登録機を閉じる。2011-05-25発表「スカイラブ3」は6月導入群なので5月へ誤混入しない。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・reset検索語を変え、資料系統を横断した後だけ残す。CONFLICTは平均しない。
