# 実機DB 最新リレー引継ぎ

更新日: 2026-08-31

## 現在地点

- 最新mainのREADME全文、最新ミッション v0.7、INDEX、LATEST_HANDOFF、既存レコードを再確認して継続。
- INDEXは旧19件地点のまま。README規定どおりLATEST_HANDOFFを進捗正本とする。
- **LATEST_HANDOFF基準158件。**
- 156件目 `恐怖新聞`（2007-09-10）の次、2007-09-17納品開始の `ビーキッズクラブR` を157件目、同日納品開始の `ツインビー` を158件目として登録。
- 新規機種は性能コアとv0.7 resetBehaviorを同時収集。欠損は検索語・資料系統変更後のみUNVERIFIED、競合値は平均せず保持。

## 今回新規追加

### 157. ビーキッズクラブR（オリンピア）

- `docs/real_machine_db/machines/2007-09-17_bee-kids-club-r.md`
- releaseDate: `2007-09-17`
  - グリーンべると2007-08-24記事が納品9月17日開始予定を明記。
  - P-WORLD、旧攻略DB、5号機クロニクルの2007年9月表記と整合。
- systemType: ノーマル / 完全告知 / ボーナス主体
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

#### 性能コア

- BIG: `1/299 → 1/252`
- REG: `1/426 → 1/256`
- 合算: `1/176 → 1/127`
- 機械割: `95.7 / 97.9 / 100.1 / 103.8 / 106.4 / 110.0%`
- 1000円あたり: 約`35G`
- BIG純増: `312枚`
- REG: `104枚`
- 出玉増加用RT/ART/AT: なし。プラム+ボーナス成立後〜告知までのリプレイ確率上昇は別挙動として記録。

#### v0.7 resetBehavior

- 通常時天井、通常時モード、CZ/ART等は `NOT_APPLICABLE / NONE_CONFIRMED`。
- 有利区間は `NOT_APPLICABLE`。
- 朝一短縮天井、朝一専用モード、公開リセット恩恵率は `NONE_CONFIRMED`。
- 設定変更/電源OFF→ON時の本機固有リール初期挙動、ボーナス成立済み・告知待ち等の特殊状態処理、ガックン等の変更判別は、当時業界記事/旧攻略DB/後年DB/回顧資料まで再探索後も確定できず `UNVERIFIED`。
- 5号機クロニクルの「RT機能付き」と旧攻略保存資料の「RTなどの付加機能なし」は、当時記事にあるボーナス成立後のリプレイ確率上昇と照合し、**出玉増加区間としてのRTなし**として定義分離。

### 158. ツインビー（KPE）

- `docs/real_machine_db/machines/2007-09-17_twinbee.md`
- 型式: `ツインビーJG`
- releaseDate: `2007-09-17`
  - グリーンべると2007-08-10記事が納品9月17日開始予定を明記。
  - P-WORLD、KPE系後年資料の2007年9月表記と整合。
- systemType: ノーマル + 天井RT / 大量獲得BIG
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

#### 性能コア

- SUPER BIG: 全設定 `1/2184.53`
- BIG: `1/485.45 → 1/372.36`
- REG: `1/1024.00 → 1/771.01`
- 合算: `1/286.18 → 1/225.21`
- 機械割: `98.8 / 99.8 / 102.0 / 104.1 / 106.8 / 109.3%`
- 1000円あたり: `45.18 → 50.09G`
- SUPER BIG純増: `448枚`
- BIG純増: `351枚`
- REG: 当時業界記事 約`90枚` vs P-WORLD/パチマガスロマガ 約`104枚` → `CONFLICT`
- 天井RT: BIG後`998G` / REG後`573G`から次回ボーナスまで。
- 天井RT中1000円あたり: 約`152.64〜154.33G`。

#### v0.7 resetBehavior — 重要

- パチマガスロマガ当時解析で **「設定変更をしても天井RTまでのゲーム数は引き継ぐ」** と明記。
- BIG後998G / REG後573Gの天井カウンタは設定変更で消去されない。
- したがって、前日ハマリは**設定変更を挟んでも朝一の宵越し天井狙い候補になり得る**。ホール側の設定変更と客AI行動を結ぶ重要な物差し値として保存。
- リセット専用短縮天井、朝一専用モードは `NONE_CONFIRMED`。
- 有利区間は `NOT_APPLICABLE`。
- 電源OFF→ONのみの場合の天井カウンタ処理、天井RT突入済み状態や成立済みボーナス等の特殊状態処理、本機固有ガックン等は、本機名/型式/KPE/設定変更/据え置き/電源/電断/朝一/天井RT/ガックン等を組み替え、当時解析・旧DB・業界記事・後年資料まで再探索したが直接確認できず `UNVERIFIED`。設定変更時引継ぎから電源OFF→ONを推定転記しない。
- 据え置き時についても、今回確認した高信頼資料の直接文言は設定変更時引継ぎである。通常の継続動作を暗黙推定値として新規数値化せず、次回QAで直接記述を追加探索する。

## resetBehavior遡及QA進捗

- 既存レコードは少なくとも2006-03-27収録群までv0.7 resetBehavior補完済みであることを直前handoffから継承。
- 次回QAはその次の時系列既存レコードから欠損確認を継続する。

## 2007年9月17日境界監査

- 当時業界記事で同日納品開始を確認した `ビーキッズクラブR`、`ツインビー` を登録済み。
- **次の未処理同日候補は `DECOICHI`（タイヨー）。** グリーンべると2007-08-31記事で型式`D51α`、納品`2007-09-17`を確認済み。
  - 同記事でボーナス合成 `1/159.1（設定1）〜1/127.3（設定6）`、スペシャルBB純増336枚、スーパーBB純増260枚、ノーマルBB平均230枚、スーパーゾーン最大50G/平均20Gまで確認済み。
  - 次回は全設定機械割/各ボーナス確率/50枚ベースおよびv0.7 resetBehaviorを再探索して登録する。
- `男気！祭野郎`（藤興）もグリーンべると2007-09-21記事で**9月17日から本格納品開始**を確認。DECOICHI後の同日候補として保持。
  - RT「男気タイム」最大500G、約+0.5枚/G、スーパー男気タイム約+0.8枚/G、赤/青BB約260枚、赤7赤7青7約70枚、合成約1/283〜1/245を一次記事で確認済み。
- `戦慄-IF IT HAPPEN（戦慄DD）` は9月期候補だが、具体導入日をまだ高信頼で確定できていないため同日キューへ割り込ませない。導入日の監査は継続。
- `Bun Bun Maru-L / -R` は5号機パチスロとしての独立証拠が弱く、同名パチンコ混同リスクのため `UNRESOLVED / HOLD` 継続。

## 今回の主要出典

### ビーキッズクラブR
- グリーンべると: https://web-greenbelt.jp/00004275/
- P-WORLD業界ニュース転載: https://news.p-world.co.jp/articles/2351/greenbelt
- P-WORLD: https://www.p-world.co.jp/machine/database/4873
- A-SLOT: https://www.a-slot.com/SHOP/heiwa65.html
- パチスロ救急車: https://www.eightbeat.com/slot99/kishu/ha_gyou/hi/beekidsclub5/page_menu.html
- 5号機クロニクル: https://5goki.com/heiwa-olympia

### ツインビー
- グリーンべると: https://web-greenbelt.jp/00004289/
- P-WORLD: https://www.p-world.co.jp/machine/database/4886
- パチマガスロマガ 基本システム: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/06/a.php
- パチマガスロマガ ボーナス確率: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/06/h.php
- パチマガスロマガ 通常/RT中1000円ゲーム数: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/06/c-1.php
- パチマガスロマガ RT/設定変更: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/06/k-1.php
- K-Navi: https://p-kn.com/slot/637/
- 5号機クロニクル: https://5goki.com/kpe

### 次候補境界
- DECOICHI（グリーンべると）: https://web-greenbelt.jp/00004267/
- 男気！祭野郎（グリーンべると）: https://web-greenbelt.jp/00006442/

取得日: 2026-08-31

## 今回GitHub反映

- `ビーキッズクラブR` 新規追加: `a9c0132bcee0d6db42dbf6967485d7cf84b7c543`
- `ツインビー` 新規追加: `a93b4fbdb7da757dbffbf5c4a8ee7c795ffb67d0`
- 本LATEST_HANDOFF更新: このコミット

## 次回再開地点

1. **LATEST_HANDOFF基準158件地点から継続。2007-09-17同日未処理の最古候補 `DECOICHI`（タイヨー）を次に登録する。その後 `男気！祭野郎` を処理し、9月17日同日群の漏れをメーカー別一覧・当時業界記事で最終監査する。**
2. `戦慄-IF IT HAPPEN（戦慄DD）` の具体導入日は引き続き公式/業界/当時解析/古いDBで比較し、時系列が確定した地点へ差し込む。
3. 新規機種は性能コア＋v0.7 resetBehaviorを同時収集する。
4. QAは既存全レコードを古い順に確認し、2006-03-27群より次の時系列レコードからresetBehavior欠損を探す。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ名とリセット関連検索語を組み替え、公式/業界/当時解析/古いDB/アーカイブ/回顧資料を十分再探索する。
6. 競合値は平均せずCONFLICT、既存COMPLETE_COREの性能完了判定は不用意に崩さずリセットQA状態を別管理する。
7. INDEXは旧19件地点のため、README規定どおり**LATEST_HANDOFFの158件地点を正**として継続する。
